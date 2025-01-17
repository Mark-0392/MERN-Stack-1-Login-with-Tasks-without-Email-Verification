import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  isSelectedText: 'Home',
  isNavOpen: false,
  isActive: 'Home',
}

const SettingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    closeSetting: (state) => {
      state.isOpen = !state.isOpen
    },
    selectText: (state, action) => {
      state.isSelectedText = action.payload
    },
    Active: (state, action) => {
      state.isActive = action.payload
    },
    closeNav: (state) => {
      state.isNavOpen = !state.isNavOpen
    },
  },
})

export const { closeSetting, selectText, closeNav, Active } =
  SettingSlice.actions

export default SettingSlice.reducer
