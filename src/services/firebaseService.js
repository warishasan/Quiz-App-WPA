import firebase from 'firebase';


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
 // const messaging = firebase.messaging();

  /*
export function initNotification() {
    
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        
        
        if(permission === "granted"){ 


            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });

              
        }
        })
    
}

*/




export function initNotification() {
    
   return Notification.requestPermission();
    
}

