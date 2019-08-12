const staticCacheName = 'v1';
const cacheFiles = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './data/restaurants.json',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './sw.js',
    './img/*'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(cacheFiles);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});
