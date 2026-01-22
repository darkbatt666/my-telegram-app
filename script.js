// Подключаем Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Показываем имя пользователя, если доступно
const userName = tg.initDataUnsafe?.user?.first_name || "Гость";
document.getElementById("name").innerText = userName;

// Функция закрытия приложения
document.getElementById("close-btn").addEventListener("click", () => {
    tg.close();
});
