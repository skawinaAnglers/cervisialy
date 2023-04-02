import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { getFirestore, onSnapshot, collection } from "firebase/firestore"
import { RootState, useAppDispatch } from "../store"
import { setSpots } from "../store/slices/user"
import Spot from "../types/Spot.interface"

export const useSpotObserver = () => {
	const { firebaseUser } = useSelector((state: RootState) => state.user)
	const dispatch = useAppDispatch()
	const db = getFirestore()

	useEffect(() => {
		if (!firebaseUser) {
			dispatch(setSpots([]))
			return
		}

		const unsubscribeSpots = onSnapshot(
			collection(db, `spots`),
			(snapshot) => {
				const spots: Spot[] = []
				snapshot.forEach((doc) => {
					spots.push({
						...doc.data() as Spot,
						id: Number.parseInt(doc.id, 10)
					})
				})
				dispatch(setSpots(spots))
			}
		)
		
		return () => unsubscribeSpots()
	}, [firebaseUser])
}
