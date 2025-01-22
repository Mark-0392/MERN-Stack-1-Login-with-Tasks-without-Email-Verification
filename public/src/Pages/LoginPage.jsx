import { toast } from 'react-toastify'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import { Form, Link, redirect } from 'react-router-dom'

import { loginUser } from '../../Features/Users/userSlice'
import axios from 'axios'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    // const dispatch = useDispatch()
    try {
      const response = await axios.post('api/v1/auth/login', data)
      store.dispatch(loginUser(response.data))
      toast.success('You have successfully logged in')
      return redirect('/dashboard')
    } catch (error) {
      console.log(error)

      const error_Message = error?.response?.data?.msg
      toast.error(error_Message)
      return null
    }
  }

function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen max-lg:bg-night bg-cover bg-center px-2 lg:bg-loginPage">
      <Form
        method="POST"
        className="w-full max-w-[500px]  h-[420px] shadow-lg rounded-lg bg-black/60 border-white/10 px-4 flex flex-col justify-center gap-2  lg:bg-white lg:border-pink-700"
      >
        <h2 className="text-2xl font-Playfair_SemiBold font-semibold  text-white lg:text-pink-600 lg:text-4xl text-center ">
          Sign In
        </h2>
        <div className="mb-4">
          <CommonFormLayout
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <CommonFormLayout
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <Link
          to="/forgotPassword"
          className="text-white lg:text-slate-700 self-end hover:text-black mb-2 text-lg"
        >
          Forgot Password ?
        </Link>
        <SubmitButtonCommon text="Log In" navigationState="Logging in..." />
        <p className="text-center h-8 text-white text-base md:text-lg lg:text-black mt-2 ">
          Haven't registered yet?{' '}
          <span className="text-blue-500 text-base md:text-xl font-bold font-LeckerLi_One_Regular">
            <Link to={'/'}>Click here to Sign Up</Link>
          </span>
        </p>
      </Form>
    </div>
  )
}
export default LoginPage

// <label
//       htmlFor="email"
//       className="absolute left-0 -top-3.5 text-gray-600 text-lg peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
//        transition-all  duration-1000"
//     >
