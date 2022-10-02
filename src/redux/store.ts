import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerListSlice'
import darkModeReducer from './darkModeSlice'

export const store = configureStore({
  reducer: {
    headerList: headerReducer,
    darkMode: darkModeReducer,
  },
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
