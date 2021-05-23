import firebase from 'firebase'
 // Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAkJkK7kqVaOo-uY6Pwwg5XeztQa8ry4W8",
        authDomain: "portfolio-contact-form-f5e61.firebaseapp.com",
        projectId: "portfolio-contact-form-f5e61",
        storageBucket: "portfolio-contact-form-f5e61.appspot.com",
        messagingSenderId: "894878248598",
        appId: "1:894878248598:web:e384e7366ee013cb7cdcb7"
    
})
var db = firebaseApp.firestore()
export { db };