"use strict";var precacheConfig=[["/portfolio/index.html","d0a5041c23ee0c01935ae4a3e188ee2d"],["/portfolio/static/css/main.b7aeedb6.css","a63bd3c7a2be9d869cab4f6a6d635c6e"],["/portfolio/static/js/main.a7725b4b.js","b42f987c2b2bb960f2422e56cde1ca0c"],["/portfolio/static/media/abbeal.5f0ddbf6.png","5f0ddbf637ec1a6d845249fa8ccf0d6e"],["/portfolio/static/media/alexandre.7c010d8e.png","7c010d8e93ecd12480fbd4c990854c6f"],["/portfolio/static/media/alpha.397e360e.png","397e360e0cc955a00db022c717ceec9f"],["/portfolio/static/media/database.d29110f3.png","d29110f3654d9e3d6b412af692f59d43"],["/portfolio/static/media/empathy.19eced43.png","19eced439f0e22b94082025b345eb784"],["/portfolio/static/media/failure.c76a4a67.png","c76a4a675173220482701ef03a45b544"],["/portfolio/static/media/html-css.8954eac2.png","8954eac21fc88ec069a6ecc22561c170"],["/portfolio/static/media/improvit.d424d6ff.png","d424d6ff4e09289978a8c09c9fe3c7e0"],["/portfolio/static/media/integrity.b173ca72.png","b173ca726d0f1bea9aa00398f5a3ca98"],["/portfolio/static/media/itschool.8cad5ed4.png","8cad5ed419ff06323b084409944662aa"],["/portfolio/static/media/javascript.0e4fdce8.png","0e4fdce8ac22e09688c580e5bc4dcd7d"],["/portfolio/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/portfolio/static/media/maintenance.b86dfe75.png","b86dfe7519257c8a611c18c0236bdefc"],["/portfolio/static/media/persevere.b312ef9a.png","b312ef9a13b893bc673cc7031a9672db"],["/portfolio/static/media/practice.3236f720.png","3236f7205a2846616e980d8880d1166f"],["/portfolio/static/media/teamwork.8d9e263c.png","8d9e263cc831e18f661cb0b5339f51fe"],["/portfolio/static/media/webpack.c500a380.png","c500a3801d8356a86da86a06c3d13a4d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});