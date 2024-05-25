import { FirebaseOptions } from "firebase/app";

const FirebaseConfig: FirebaseOptions = {
	apiKey: import.meta.env.VITE_FB_KEY,
	authDomain: import.meta.env.VITE_FB_DOMAIN,
	projectId: import.meta.env.VITE_FB_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FB_SENDER_ID,
	appId: import.meta.env.VITE_FB_APP_ID,
	measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
};

console.log(FirebaseConfig);

export { FirebaseConfig };
