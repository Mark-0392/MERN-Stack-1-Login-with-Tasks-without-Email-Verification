import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async () => {
    try {
      const response = await axios.get(`/api/v1/users/showMe`)
      return response.data
    } catch (error) {
      const errorMsg = error?.response?.data?.msg
      console.log(errorMsg)
    }
  }
)

// export const logoutUserThunk = createAsyncThunk(
//   'user/logoutUserThunk',
//   async () => {
//     try {
//       const response = await axios.delete(`/api/v1/auth/logout`)
//       console.log(response.data)
//       return response
//     } catch (error) {
//       const errorMsg = error.response.data.msg
//       console.log(errorMsg)
//     }
//   }
// )

const initialState = {
  user: {},
  message: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      let user = action.payload.user
      state.user = user
    },
    logoutUser: (state, action) => {
      state.user = null
      toast.success('You have logged out successfully')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
