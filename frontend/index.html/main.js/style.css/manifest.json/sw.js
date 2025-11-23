<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bhagwal Connect</title>

  <!-- PWA Manifest -->
  <link rel="manifest" href="manifest.json">

  <!-- Theme color -->
  <meta name="theme-color" content="#4CAF50">

  <!-- Favicon -->
  <link rel="icon" href="icons/icon-192.png" type="image/png">

  <!-- CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Bhagwal Connect</h1>
    <p>Your AI-powered local guide for Bhagwal, Kharian Tehsil, Gujrat DIstrict</p>
  </header>

  <main>
    <section class="query-section">
      <input type="text" id="userQuery" placeholder="Ask about schools, mosques, shops...">
      <button id="sendBtn">Send</button>
    </section>

    <section id="responseContainer">
      <!-- AI responses will appear here -->
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Bhagwal Connect Devolope By Murshad87</p>
  </footer>

  <!-- JS -->
  <script src="main.js"></script>

  <!-- Service Worker Registration -->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.error('SW registration failed:', err));
    }
  </script>
</body>
</html>
// sw.js - Service Worker for Bhagwal Connect

const CACHE_NAME = "bhagwal-connect-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install event - cache important files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - clear old cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch event - respond with cache first, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() =>
          caches.match("/index.html") // fallback offline page
        )
      );
    })
  );
});
