import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { onSnapshot, doc, getFirestore } from 'firebase/firestore'
import { FirebaseUser } from '../types/FirebaseUser.interface'
import User from '../../functions/src/shared/User.interface'
import { useAppDispatch } from '../store'
import { setFirebaseUser, setUser } from '../store/slices/user'
import { reset } from '../helpers/NavigationHelper'
import { auth } from '../helpers/setupFirebaseApp'

type UseUserObserver = {
	firebaseLoaded: boolean
}

export const useUserObserver = (): UseUserObserver => {
	const [firebaseLoaded, setFirebaseLoaded] = useState(false)
	const dispatch = useAppDispatch()
	const db = getFirestore()
	let unsubscribeUser: null | (() => void) = null

	useEffect(() => {
		const unsubscribeAuth = onAuthStateChanged(auth, (newFirebaseUser) => {
			if (newFirebaseUser) {
				const firebaseUserData = newFirebaseUser.toJSON() as FirebaseUser
				dispatch(setFirebaseUser(firebaseUserData))
				reset({
					index: 0,
					routes: [{ name: 'Home' }]
				})
				unsubscribeUser = onSnapshot(
					doc(db, `users/${newFirebaseUser.uid}`),
					(snapshot) => {
						const newUser = snapshot.data() as User
						dispatch(setUser(newUser))
						setFirebaseLoaded(true)
					}
				)
			} else {
				if (unsubscribeUser) {
					unsubscribeUser()
					dispatch(setUser())
				}
				dispatch(setFirebaseUser())
				setFirebaseLoaded(true)
			}
		})
		
		return () => unsubscribeAuth()
	}, [])

	return { firebaseLoaded }
}