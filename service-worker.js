!function(){"use strict";const a=["client/client.2aa85536.js","client/index.4a126827.js","client/[slug].0daea504.js","client/index.296e3344.js","client/index.0144235c.js","client/[...slug].57f72f54.js","client/client.11939054.js"].concat(["service-worker-index.html","alakajam/11th-alakajam/zarguufs-bone-crypt-adventure/images/1075.png","alakajam/1st-alakajam/to-brew-a-love-potion/images/80.png","alakajam/1st-kajam/teleballtation/images/101.png","alakajam/2nd-alakajam/lights-camera-shoot/images/158.png","alakajam/3rd-alakajam/cabin-smash-craze/images/318.png","alakajam/3rd-kajam/j3-the-janitor/images/110.png","alakajam/4th-alakajam/portable-looping-machine/images/448.png","alakajam/5th-alakajam/illustrious-escape/images/588.png","alakajam/6th-alakajam/the-last-ace/images/710.png","alakajam/7th-alakajam/zarguufs-cauldron/images/807.png","alakajam/8th-alakajam/zarguufs-cellar/images/880.png","alakajam/scorespace-alakajam/the-crystal-tower/images/949.png","favicon.png","global.css","ludum-dare/30/realworld-vs-cleanworld/images/40138-shot0.png-eq-900-500.jpg","ludum-dare/31/simian-situation/images/40138-shot0.png-eq-900-500.jpg","ludum-dare/32/how-to-teleport/images/40138-shot0-1429484881.jpg-eq-900-500.jpg","ludum-dare/33/heroes-always-win/images/40138-shot0-1440362710.png-eq-900-500.jpg","ludum-dare/34/sticky-stuff/images/40138-shot0-1450054388.png-eq-900-500.jpg","ludum-dare/35/the-magnificent-lepus/images/40138-shot0-1460928402.png-eq-900-500.jpg","ludum-dare/36/left-to-ruin/images/40138-shot0-1472428102.png-eq-900-500.jpg","ludum-dare/37/sorry,-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/37/sorry-we're-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/37/sorry-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/38/out-of-this-small-world/images/6a38.png","ludum-dare/38/out-of-this-small-world/images/8ea.png","ludum-dare/38/out-of-this-small-world/images/8ed.png","ludum-dare/38/out-of-this-small-world/images/8f1.png","ludum-dare/39/in-charge-of-power/images/5d9e.png","ludum-dare/39/in-charge-of-power/images/5e1a.png","ludum-dare/39/in-charge-of-power/images/5e1b.png","ludum-dare/39/in-charge-of-power/images/5e24.png","ludum-dare/39/in-charge-of-power/images/5e26.png","ludum-dare/40/being-plundered/images/a80e.png","ludum-dare/40/being-plundered/images/a817.png","ludum-dare/40/being-plundered/images/a81a.png","ludum-dare/40/being-plundered/images/a85d.png","ludum-dare/40/being-plundered/images/a90f.png","ludum-dare/40/being-plundered/images/e9e0.png","ludum-dare/41/drive-or-die/images/10313.png","ludum-dare/41/drive-or-die/images/1031a.png","ludum-dare/42/slime-janitor/images/167a1.png","ludum-dare/42/slime-janitor/images/16832.png","ludum-dare/42/slime-janitor/images/16835.png","ludum-dare/42/slime-janitor/images/16837.png","ludum-dare/43/not-safe-for-teamwork/images/1c26d.png","ludum-dare/43/not-safe-for-teamwork/images/1c26f.png","ludum-dare/44/pay-with-your-blood/images/2119d.png","ludum-dare/44/pay-with-your-blood/images/2119e.png","ludum-dare/44/pay-with-your-blood/images/2119f.png","ludum-dare/44/pay-with-your-blood/images/249ec.png","ludum-dare/45/research-station-3152/images/2852a.png","ludum-dare/45/research-station-3152/images/28547.png","ludum-dare/47/tranquil-grove/images/36ac2.png","ludum-dare/47/tranquil-grove/images/36ac3.png","ludum-dare/47/tranquil-grove/images/36ac4.png","ludum-dare/47/tranquil-grove/images/36ace.png","ludum-dare/47/tranquil-grove/images/3979c.png","ludum-dare/48/sunk-cost/images/3def2.png","ludum-dare/48/sunk-cost/images/3defd.png","ludum-dare/48/sunk-cost/images/3df01.png","ludum-dare/48/sunk-cost/images/3df08.png","ludum-dare/48/sunk-cost/images/429dd.gif"]),e=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1627198146434").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(async a=>{for(const e of a)"cache1627198146434"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const s=new URL(a.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&e.has(s.pathname)?a.respondWith(caches.match(a.request)):"only-if-cached"!==a.request.cache&&a.respondWith(caches.open("offline1627198146434").then(async e=>{try{const s=await fetch(a.request);return e.put(a.request,s.clone()),s}catch(s){const n=await e.match(a.request);if(n)return n;throw s}}))))})}();
