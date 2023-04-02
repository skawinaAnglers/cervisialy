import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { getFirestore, onSnapshot, collection } from "firebase/firestore"
import { RootState, useAppDispatch } from "../store"
import { setPosts } from "../store/slices/user"
import Post from "../types/Post.interface"

export const usePostObserver = () => {
	const { firebaseUser } = useSelector((state: RootState) => state.user)
	const dispatch = useAppDispatch()
	const db = getFirestore()

	useEffect(() => {
		if (!firebaseUser) {
			dispatch(setPosts([]))
			return
		}

		const unsubscribePosts = onSnapshot(
			collection(db, `posts`),
			(snapshot) => {
				const posts: Post[] = []
				snapshot.forEach((doc) => {
					posts.push({
						...doc.data() as Post,
						id: doc.id
					})
				})
				dispatch(setPosts(posts))
			}
		)
		
		return () => unsubscribePosts()
	}, [firebaseUser])
}
