import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCZGnRjXMrhBeTTvOOwxAag-dXdkXA1Pxc',
  authDomain: 'cloudlogicdev.firebaseapp.com',
  databaseURL: 'https://cloudlogicdev.firebaseio.com',
  projectId: 'cloudlogicdev',
  storageBucket: 'cloudlogicdev.appspot.com',
  messagingSenderId: '885070654778'
})

export default firebase
