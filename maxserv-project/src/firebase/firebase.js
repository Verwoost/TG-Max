import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCedovUvtZD67UaSk_PXmyudtP24Uuvas4",
  authDomain: "maxserv-train.firebaseapp.com",
  projectId: "maxserv-train",
  storageBucket: "maxserv-train.appspot.com",
  messagingSenderId: "590803749394",
  appId: "1:590803749394:web:974abf5df9cbbabee966cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
