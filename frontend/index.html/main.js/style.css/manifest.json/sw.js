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
