// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNSMEHGLLusKWJsMgQyjiFWJ3Oq-LWAlU",
  authDomain: "bug-tracker-app-bc784.firebaseapp.com",
  databaseURL: "https://bug-tracker-app-bc784-default-rtdb.firebaseio.com",
  projectId: "bug-tracker-app-bc784",
  storageBucket: "bug-tracker-app-bc784.appspot.com",
  messagingSenderId: "777885363612",
  appId: "1:777885363612:web:66dff2b8285ac975226c59",
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db;
