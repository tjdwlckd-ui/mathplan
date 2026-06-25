import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9fJeLMAFW_h3QZCs5VXNKXtpO3aqNbIU",
  authDomain: "math-b513d.firebaseapp.com",
  databaseURL: "https://math-b513d-default-rtdb.firebaseio.com",
  projectId: "math-b513d",
  storageBucket: "math-b513d.firebasestorage.app",
  messagingSenderId: "1011419690373",
  appId: "1:1011419690373:web:2c9f2a7a6f87af614140ec",
  measurementId: "G-1CHC7Z11DG"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
