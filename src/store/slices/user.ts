import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseUser } from '../../types/FirebaseUser.interface'
import User from '../../../functions/src/shared/User.interface'

interface UserState {
  firebaseUser?: FirebaseUser,
	user?: User,
}

const initialState: UserState = {
  user: undefined,
	firebaseUser: undefined
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
    }
  }
})

export const { setUser, setFirebaseUser } = userSlice.actions
