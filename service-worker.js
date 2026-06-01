/* REPROGEN CAMPO V3.4.1 — Service Worker PWA Offline */
var CACHE_NAME = 'reprogen-campo-v3-4-1-sync-corrigido';
var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_SHELL);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  var url = new URL(req.url);

  // Apps Script/API: tenta rede primeiro. Se falhar, não inventa resposta.
  if (url.hostname.indexOf('script.google.com') >= 0 || url.hostname.indexOf('googleusercontent.com') >= 0) {
    event.respondWith(
      fetch(req).catch(function() {
        return new Response(JSON.stringify({
          sucesso:false,
          offline:true,
          erro:'Sem conexão. O registro permanece na fila local.'
        }), {headers:{'Content-Type':'application/json'}});
      })
    );
    return;
  }

  // App shell: cache first, fallback para index em navegação fria offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(function(resp) {
        var copy = resp.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put('./index.html', copy); });
        return resp;
      }).catch(function() {
        return caches.match('./index.html');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached) {
      return cached || fetch(req).then(function(resp) {
        return resp;
      }).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
