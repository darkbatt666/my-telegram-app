# darkbatt666.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>My Mini App</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
  </style>
</head>
<body>

<h2>Привет, <span id="name"></span> 👋</h2>
<button onclick="closeApp()">Закрыть</button>

<script>
  const tg = window.Telegram.WebApp;
  tg.ready();

  document.getElementById("name").innerText =
    tg.initDataUnsafe?.user?.first_name || "гость";

  function closeApp() {
    tg.close();
  }
</script>

</body>
</html>
