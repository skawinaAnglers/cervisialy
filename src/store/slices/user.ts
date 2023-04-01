import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  uid?: string
}

const initialState: UserState = {
  uid: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload
    }
  }
})

export const { setUid } = userSlice.actions
