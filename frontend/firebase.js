// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Tcb43PXSWmQq070uOdig3OQVY39yKGY",
  authDomain: "schoolbridge-131d7.firebaseapp.com",
  projectId: "schoolbridge-131d7",
  storageBucket: "schoolbridge-131d7.appspot.com",
  messagingSenderId: "848177019213",
  appId: "1:848177019213:web:97392047d2632f45849f04",
  measurementId: "G-RCXQB7S39T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
