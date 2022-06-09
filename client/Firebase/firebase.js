import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQxZaezkG44MhO-c95_YAZSKb7jorKeiw",
  authDomain: "medico-allwell.firebaseapp.com",
  projectId: "medico-allwell",
  storageBucket: "medico-allwell.appspot.com",
  messagingSenderId: "901462508905",
  appId: "1:901462508905:web:087e8b01d945c9b82c29f8"
}

if(!firebase.apps.length){

firebase.initializeApp(firebaseConfig);

}

export {firebase}