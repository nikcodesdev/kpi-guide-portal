// =====================================================================
// FIREBASE CONFIG
// Вставь сюда конфиг из консоли Firebase:
// Project settings → General → Your apps → SDK setup and configuration
// =====================================================================
export const firebaseConfig = {
  apiKey: "ВСТАВЬ_СЮДА",
  authDomain: "ВСТАВЬ_СЮДА.firebaseapp.com",
  projectId: "ВСТАВЬ_СЮДА",
  storageBucket: "ВСТАВЬ_СЮДА.appspot.com",
  messagingSenderId: "ВСТАВЬ_СЮДА",
  appId: "ВСТАВЬ_СЮДА",
};

// Email единственного администратора — только этот аккаунт увидит admin.html
export const ADMIN_EMAIL = "ostapenko.nyu@dns-shop.ru";

// Соответствие должностей и страниц репозитория
export const POSITION_PAGES = {
  usm: { label: "УСМ", page: "USM.html" },
  sklad: { label: "Кладовщик", page: "sklad.html" },
  pk: { label: "Продавец-консультант", page: "pk.html" },
};
