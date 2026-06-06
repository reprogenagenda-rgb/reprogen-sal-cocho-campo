// APP COCHO CAMPO V1.2 SUPABASE — COCHO PROVISÓRIO NO CAMPO
const CACHE_NAME='app-cocho-campo-v1-2-cocho-provisorio';
const CORE=['./','./index.html?v=1.2','./manifest.json?v=1.2','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE).catch(()=>null)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request;const url=new URL(req.url);if(url.origin!==self.location.origin){event.respondWith(fetch(req));return;}if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match('./index.html?v=1.2')));return;}event.respondWith(caches.match(req).then(cached=>cached||fetch(req)))});
