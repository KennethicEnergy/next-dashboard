import { initializeApp } from "firebase/app";

export const firebaseConfig = {
	projectId: process.env.PROJECT_ID,
	appId: process.env.APP_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
