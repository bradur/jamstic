!function(){"use strict";const e=["client/index.c385a3dd.js","client/index.4a7adcc1.js","client/index.23d9200b.js","client/[slug].bf59bf2f.js","client/client.8cf4b0e5.js","client/[...slug].ed12d765.js","client/client.83e6b297.js"].concat(["service-worker-index.html","favicon.png","global.css","ludum-dare/38/out-of-this-small-world/images/6a38.png","ludum-dare/38/out-of-this-small-world/images/8ea.png","ludum-dare/38/out-of-this-small-world/images/8ed.png","ludum-dare/38/out-of-this-small-world/images/8f1.png","ludum-dare/39/in-charge-of-power/images/5d9e.png","ludum-dare/39/in-charge-of-power/images/5e1a.png","ludum-dare/39/in-charge-of-power/images/5e1b.png","ludum-dare/39/in-charge-of-power/images/5e24.png","ludum-dare/39/in-charge-of-power/images/5e26.png","ludum-dare/40/being-plundered/images/a80e.png","ludum-dare/40/being-plundered/images/a817.png","ludum-dare/40/being-plundered/images/a81a.png","ludum-dare/40/being-plundered/images/a85d.png","ludum-dare/40/being-plundered/images/a90f.png","ludum-dare/40/being-plundered/images/e9e0.png","ludum-dare/41/drive-or-die/images/10313.png","ludum-dare/41/drive-or-die/images/1031a.png","ludum-dare/42/slime-janitor/images/167a1.png","ludum-dare/42/slime-janitor/images/16832.png","ludum-dare/42/slime-janitor/images/16835.png","ludum-dare/42/slime-janitor/images/16837.png","ludum-dare/43/not-safe-for-teamwork/images/1c26d.png","ludum-dare/43/not-safe-for-teamwork/images/1c26f.png","ludum-dare/44/pay-with-your-blood/images/2119d.png","ludum-dare/44/pay-with-your-blood/images/2119e.png","ludum-dare/44/pay-with-your-blood/images/2119f.png","ludum-dare/44/pay-with-your-blood/images/249ec.png","ludum-dare/45/research-station-3152/images/2852a.png","ludum-dare/45/research-station-3152/images/28547.png"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1587804658533").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1587804658533"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&a.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587804658533").then(async a=>{try{const n=await fetch(e.request);return a.put(e.request,n.clone()),n}catch(n){const d=await a.match(e.request);if(d)return d;throw n}}))))})}();
