// =====================================================================
// FIREBASE CONFIG
// Вставь сюда конфиг из консоли Firebase:
// Project settings → General → Your apps → SDK setup and configuration
// =====================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyC5DEDuRcMLB7Bkd3H5P8HSJEyjwmF5SAo",
  authDomain: "kpi-guide.firebaseapp.com",
  projectId: "kpi-guide",
  storageBucket: "kpi-guide.firebasestorage.app",
  messagingSenderId: "262373088018",
  appId: "1:262373088018:web:76c946580abde4a17171cb",
};

// Email единственного администратора — только этот аккаунт увидит admin.html
export const ADMIN_EMAIL = "ostapenko.nyu@dns-shop.ru";

// Соответствие должностей и страниц репозитория
export const POSITION_PAGES = {
  usm: { label: "УСМ", page: "USM.html" },
  sklad: { label: "Кладовщик", page: "sklad.html" },
  pk: { label: "Продавец-консультант", page: "pk.html" },
};
