import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsfYjOe4_ooU6FSe9VJ83uwMwpCtRWDGk",
  authDomain: "tutor-chat-app.firebaseapp.com",
  projectId: "tutor-chat-app",
  storageBucket: "tutor-chat-app.appspot.com",
  messagingSenderId: "1060199234434",
  appId: "1:1060199234434:web:a0f901d966b0480dfe2d9b",
  measurementId: "G-QE433KVXTC"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
