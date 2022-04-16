import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChIsSd_NMcy0uVefO8bgRH6yTaiP1P6Uc",
    authDomain: "art-line-6db07.firebaseapp.com",
    projectId: "art-line-6db07",
    storageBucket: "art-line-6db07.appspot.com",
    messagingSenderId: "354036868810",
    appId: "1:354036868810:web:b62254c3edbe7d91507633"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
    auth,
}