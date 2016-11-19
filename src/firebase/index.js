 import firebase from 'firebase'
 
 

try {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoxjRkZxT5bMFNM1vyAQzYx82HxM5p9Y0",
    authDomain: "my-todo-app-98cf4.firebaseapp.com",
    databaseURL: "https://my-todo-app-98cf4.firebaseio.com",
    storageBucket: "my-todo-app-98cf4.appspot.com",
    messagingSenderId: "42777741813"
  }

  firebase.initializeApp(config)

}catch(e){
    console.log('Error setting up firebase:', e);
}


 export var firebaseRef = firebase.database().ref()
 export default firebase