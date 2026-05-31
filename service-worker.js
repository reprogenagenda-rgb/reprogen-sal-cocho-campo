/* REPROGEN CAMPO V3.4.3 — PWA Offline Real + atualização de cache
   Compatível com GitHub Pages, Android Chrome e JavaScript ES5.
   Motivo da versão: força o navegador/PWA a baixar o index.html corrigido da data/hora local BR.
*/

var CACHE_VERSION = 'reprogen-campo-v3-4-3-hora-br';

var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return Promise.all(
        APP_SHELL.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('[SW] Falha ao cachear:', url, err);
            return Promise.resolve();
          });
        })
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== CACHE_VERSION) {
            return caches.delete(key);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(function(networkResponse) {
        return networkResponse;
      }).catch(function() {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }

        return new Response('', {
          status: 408,
          statusText: 'Offline'
        });
      });
    })
  );
});
