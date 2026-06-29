// sw.js - Service Worker do Escorphy

const CACHE_NAME = 'escorphy-v1';

// Arquivos para cache (ajuste conforme sua necessidade)
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/home/home.css',
  '/img/a.png',
  '/img/icon-192.png',
  '/img/edit 2.jpg',
  '/img/edit 4.jpg',
  '/img/edit 8.jpg',
  '/img/edit 9.jpg',
  '/img/edit 10.jpg'
];

// Instalação do Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação - limpa caches antigos
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta requisições e serve do cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - retorna do cache
        if (response) {
          return response;
        }
        // Se não estiver no cache, busca na internet
        return fetch(event.request);
      })
  );
});