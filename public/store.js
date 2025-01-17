import { configureStore } from '@reduxjs/toolkit'

import userReducer from './Features/Users/userSlice'
import settingReducer from './Features/Settings/settingSlice'

export const store = configureStore({
  reducer: {
    userState: userReducer,
    setting: settingReducer,
  },
})
