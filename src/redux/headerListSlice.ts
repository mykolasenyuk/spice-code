import { createSlice } from '@reduxjs/toolkit'

export interface HeaderListState {
  isHeaderListOpen: boolean
}

const initialState: HeaderListState = {
  isHeaderListOpen: false,
}

export const headerListSlice = createSlice({
  name: 'header list',
  initialState,
  reducers: {
    changeHeaderListStatus: state => {
      state.isHeaderListOpen = !state.isHeaderListOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeHeaderListStatus } = headerListSlice.actions

export default headerListSlice.reducer
