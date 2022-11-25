import { configureStore } from '@reduxjs/toolkit'
import appSilceReducer from './Slice/appSlice'

export default configureStore({
  reducer: {
    appSlice: appSilceReducer,
  },
})