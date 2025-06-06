// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz-yo7PmFo0eFyzfjQwCP3yiB5GqqpTp0",
  authDomain: "studentdashboard-681a8.firebaseapp.com",
  projectId: "studentdashboard-681a8",
  storageBucket: "studentdashboard-681a8.appspot.com",
  messagingSenderId: "171483691299",
  appId: "1:171483691299:web:f2bc4e00b696c55b4cf496",
  measurementId: "G-RVFB0Z9TFS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };