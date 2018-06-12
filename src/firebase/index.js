import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-Zs2r1iFFKJGBCp0PDY7GNNBw513RS9w",
    authDomain: "fsjobs-e242a.firebaseapp.com",
    databaseURL: "https://fsjobs-e242a.firebaseio.com",
    projectId: "fsjobs-e242a",
    storageBucket: "fsjobs-e242a.appspot.com",
    messagingSenderId: "589707820439"
  };

firebase.initializeApp(config)

export default firebase

export const db = firebase.firestore()
export const storage = firebase.storage();