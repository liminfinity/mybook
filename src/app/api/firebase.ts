import { FirebaseConfig } from "@app/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(FirebaseConfig);

const firestore = getFirestore(firebaseApp);

export { firestore };
