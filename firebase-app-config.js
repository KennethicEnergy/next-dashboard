import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  "projectId": "next-dashboard-190b6",
  "appId": "1:682882394171:web:5493f0e9c67d438a52d41e",
  "databaseURL": "https://next-dashboard-190b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": "next-dashboard-190b6.appspot.com",
  "locationId": "asia-east2",
  "apiKey": "AIzaSyAUBZ41kLJaLSejScq8vUTNet34mk3I3WY",
  "authDomain": "next-dashboard-190b6.firebaseapp.com",
  "messagingSenderId": "682882394171",
  "measurementId": "G-G0J6815LGM"
}

export const firebaseApp = initializeApp(firebaseConfig);