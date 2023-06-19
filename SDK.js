// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLzoq0OukdDcRCYrXEdlHQl3Mb3qq7nEY",
  authDomain: "address-7553d.firebaseapp.com",
  projectId: "address-7553d",
  storageBucket: "address-7553d.appspot.com",
  messagingSenderId: "382744140971",
  appId: "1:382744140971:web:f2df061cb0a53183a9ebee",
  measurementId: "G-84GVE8C78T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);