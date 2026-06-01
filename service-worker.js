/* REPROGEN SAL COCHO CAMPO V1.0.1 — Service Worker PWA Offline */

var CACHE_NAME = 'reprogen-sal-cocho-campo-v1-0-1';

var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

/* Instalação do Service Worker */
self.addEventListener('install', function(event) {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_SHELL);
    })
  );
});

/* Ativação e limpeza de caches antigos */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* Estratégia de carregamento:
   1. Tenta buscar no cache
   2. Se não tiver no cache, busca na internet
   3. Se falhar, tenta abrir o index.html salvo
*/
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
        return caches.match('./index.html');
      });
    })
  );
});
