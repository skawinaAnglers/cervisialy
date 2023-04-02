import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { getFirestore, onSnapshot, collection } from "firebase/firestore"
import { RootState, useAppDispatch } from "../store"
import { setBeers } from "../store/slices/user"
import Beer from "../types/Beer.interface"

export const useBeerObserver = () => {
	const { firebaseUser } = useSelector((state: RootState) => state.user)
	const dispatch = useAppDispatch()
	const db = getFirestore()

	useEffect(() => {
		if (!firebaseUser) {
			dispatch(setBeers([]))
			return
		}

		const unsubscribeBeers = onSnapshot(
			collection(db, `beers`),
			(snapshot) => {
				const beers: Beer[] = []
				snapshot.forEach((doc) => {
					beers.push({
						...doc.data() as Beer,
						id: doc.id
					})
				})
				dispatch(setBeers(beers))
			}
		)
		
		return () => unsubscribeBeers()
	}, [firebaseUser])
}
