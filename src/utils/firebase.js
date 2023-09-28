import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "new-blog-app-399314.firebaseapp.com",
    projectId: "new-blog-app-399314",
    storageBucket: "new-blog-app-399314.appspot.com",
    messagingSenderId: "665429014461",
    appId: "1:665429014461:web:1bb8d1f10323d4b87dc4d4",
    measurementId: "G-JKT1EJM5MX"
};

export const app = initializeApp(firebaseConfig);