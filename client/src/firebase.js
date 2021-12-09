import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" // New import

const firebaseConfig = {

  apiKey: "AIzaSyDK_gtgWRje04sdFrZ8qM9yCDmqMCeIGCg",

  authDomain: "auth-development-a3d48.firebaseapp.com",

  projectId: "auth-development-a3d48",

  storageBucket: "auth-development-a3d48.appspot.com",

  messagingSenderId: "99180071590",

  appId: "1:99180071590:web:f70be626fdf6775e000267"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app