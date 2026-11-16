import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8jUnKJKyd8VrMbKVhc5hD955TjopDpz8",
  authDomain: "movie-3871d.firebaseapp.com",
  projectId: "movie-3871d",
  storageBucket: "movie-3871d.firebasestorage.app",
  messagingSenderId: "967270342365",
  appId: "1:967270342365:web:761b4a6f87f557086ec534",
  measurementId: "G-58VG5FLN2K"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const analytics = getAnalytics(app);
export const auth = getAuth(app);