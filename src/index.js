import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2Gkw_6Vj79ZvQZ_Oz8gCTMBYS0HQyOvA",
  authDomain: "cart-628da.firebaseapp.com",
  projectId: "cart-628da",
  storageBucket: "cart-628da.appspot.com",
  messagingSenderId: "387525868937",
  appId: "1:387525868937:web:88f125c972174196fdf558"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

