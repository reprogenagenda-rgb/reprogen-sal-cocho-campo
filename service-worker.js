/* REPROGEN CAMPO V3.4.1 — PWA Offline Real
   Compatível com GitHub Pages, Android Chrome e JavaScript ES5.
   Correção cirúrgica: cache app-shell + fallback para abertura fria offline.
*/

var CACHE_VERSION = 'reprogen-campo-v3-4-1-offline-real';
var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
 './icon-192.png',
'./icon-512.png',
  /* Inclua aqui somente se existirem no repositório:
  './libs/xlsx.full.min.js',
  './libs/leaflet.css',
  './libs/leaflet.js',
  './libs/chart.min.js'
  */
];

function cacheIndividualmente(cache) {
  return Promise.all(APP_SHELL.map(function (url) {
    return cache.add(url).catch(function (err) {
      /* Não deixa uma imagem/lib ausente quebrar a instalação do service worker. */
      try { console.warn('[SW] Falha ao cachear:', url, err); } catch (e) {}
      return Promise.resolve();
    });
  }));
}

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cacheIndividualmente(cache);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_VERSION) {
          return caches.delete(key);
        }
        return Promise.resolve();
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function isNavigationRequest(request) {
  return request.mode === 'navigate' ||
    (request.method === 'GET' && request.headers.get('accept') && request.headers.get('accept').indexOf('text/html') !== -1);
}

function isSyncOrApiRequest(url) {
  return /script\.google\.com|googleapis\.com|api\//i.test(url);
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') { return; }

  var url = request.url || '';

  /* APIs/sincronização: tenta rede primeiro; se offline, devolve erro controlado. */
  if (isSyncOrApiRequest(url)) {
    event.respondWith(
      fetch(request).catch(function () {
        return new Response(JSON.stringify({ ok: false, offline: true, message: 'Sem internet. Registro mantido na fila local.' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  /* Navegação/abertura fria: cache primeiro; se falhar, index.html. */
  if (isNavigationRequest(request)) {
    event.respondWith(
      fetch(request).then(function (response) {
        var copy = response.clone();
        caches.open(CACHE_VERSION).then(function (cache) { cache.put('./index.html', copy); });
        return response;
      }).catch(function () {
        return caches.match('./index.html').then(function (cached) {
          return cached || caches.match('./');
        });
      })
    );
    return;
  }

  /* App shell e arquivos estáticos: cache first, depois rede, depois index. */
  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) { return cached; }
      return fetch(request).then(function (response) {
        if (response && response.status === 200 && response.type !== 'opaque') {
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      }).catch(function () {
        return caches.match('./index.html');
      });
    })
  );
});
