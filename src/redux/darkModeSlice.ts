import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DarkModeState {
  isDarkModeEnabled: boolean
}

const darkMode = true

const initialState: DarkModeState = {
  isDarkModeEnabled: darkMode,
}

export const darkModeSlice = createSlice({
  name: 'dark mode',
  initialState,
  reducers: {
    changeDarkModeStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isDarkModeEnabled = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDarkModeStatus } = darkModeSlice.actions

export default darkModeSlice.reducer
