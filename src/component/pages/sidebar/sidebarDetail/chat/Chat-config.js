

const config = {
    apiKey: "AIzaSyDzLHqMEGu4wKo84kNpkBBDvZ2QezHdsiQ",
    authDomain: "bandsns-c039b.firebaseapp.com",
    projectId: "bandsns-c039b",
    storageBucket: "bandsns-c039b.appspot.com",
    messagingSenderId: "173294159265",
    appId: "1:173294159265:web:505681fee23fa243dcf7e0",
    measurementId: "G-4E7RS06Z9G"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }