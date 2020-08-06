importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAqN2F3GWoWSIQOX0G-g3SPQxTquqReK6k",
  authDomain: "quiz-app-5765a.firebaseapp.com",
  databaseURL: "https://quiz-app-5765a.firebaseio.com",
  projectId: "quiz-app-5765a",
  storageBucket: "quiz-app-5765a.appspot.com",
  messagingSenderId: "423857748274",
  appId: "1:423857748274:web:ff45171022e02ea1b63f2b"
};

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();