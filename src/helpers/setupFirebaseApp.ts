import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native'
import { 
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_SENDER_ID,
	REACT_APP_ID
} from '@env'
import { FirebaseApp, getApp, getApps, initializeApp } from '@firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_ID
}

// eslint-disable-next-line import/no-mutable-exports
let app: FirebaseApp
// eslint-disable-next-line import/no-mutable-exports
let auth: Auth
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
} else {
  app = getApp()
  auth = getAuth()
}
const IP = '172.20.47.37'
if (__DEV__) {
  const db = getFirestore()
	const functions = getFunctions()
	connectFunctionsEmulator(functions, IP, 5001)
  connectFirestoreEmulator(db, IP, 8080)
  connectAuthEmulator(auth, `http://${IP}:9099/`)
}

export { auth, app }
