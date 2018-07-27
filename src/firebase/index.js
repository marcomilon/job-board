import firebase from 'firebase';

import config from './config.js'

firebase.initializeApp(config)

export default firebase

export const db = firebase.firestore()
export const storage = firebase.storage()