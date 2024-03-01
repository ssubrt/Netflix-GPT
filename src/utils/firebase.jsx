// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOZz_CvKjLCoYafyjtxY1-vwlYiOIKIsg",
  authDomain: "netflix-gpt-c5136.firebaseapp.com",
  projectId: "netflix-gpt-c5136",
  storageBucket: "netflix-gpt-c5136.appspot.com",
  messagingSenderId: "595434258140",
  appId: "1:595434258140:web:60fc23fe530042412ffe19",
  measurementId: "G-B6TDPMNXJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();