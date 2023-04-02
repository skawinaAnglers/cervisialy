import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseUser } from '../../types/FirebaseUser.interface'
import User from '../../../functions/src/shared/User.interface'
import Post from '../../types/Post.interface'
import Spot from '../../types/Spot.interface'

interface UserState {
  firebaseUser?: FirebaseUser,
	user?: User,
	posts: Post[],
	spots: Spot[]
}

const initialState: UserState = {
  user: undefined,
	firebaseUser: undefined,
	posts: [],
	spots: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload
    },
		setFirebaseUser: (state, action: PayloadAction<FirebaseUser | undefined>) => {
      state.firebaseUser = action.payload
    },
		setPosts: (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload
		},
		setSpots: (state, action: PayloadAction<Spot[]>) => {
			state.spots = action.payload
		}
  }
})

export const { setUser, setFirebaseUser, setPosts, setSpots } = userSlice.actions
