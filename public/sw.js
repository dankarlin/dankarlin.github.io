const CACHE_NAME = 'dankarlin-v1.0.1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/dan-karlin-photo.webp',
  '/dan-karlin-photo.jpg',
  '/vite.svg',
  '/sitemap.xml',
  '/robots.txt'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event - Stale-While-Revalidate caching strategy for faster subsequent loads and background updates
self.addEventListener('fetch', event => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const networkFetch = fetch(event.request)
          .then(networkResponse => {
            // Update cache with the new network response
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Fallback to cache if network fails
            return cachedResponse;
          });

        // Return cached response immediately if we have it, otherwise wait for network
        return cachedResponse || networkFetch;
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});