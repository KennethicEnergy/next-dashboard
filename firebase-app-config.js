import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  locationId: process.env.LOCATION_ID,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig);