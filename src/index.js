import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 


firebase.initializeApp({
  apiKey: "AIzaSyAoleTMf6qOHOCnYCLaUS-HkI3Anb-_sgM",
  authDomain: "chat-react-e2bd7.firebaseapp.com",
  projectId: "chat-react-e2bd7",
  storageBucket: "chat-react-e2bd7.appspot.com",
  messagingSenderId: "364123469189",
  appId: "1:364123469189:web:5df378d3cbd6f12a7fc0ec",
  measurementId: "G-J5SRPRYG98"
}); 

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);
