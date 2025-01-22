import { Form, redirect } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BaseURL } from '../../Utils/BaseUrl'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await BaseURL.post('/api/v1/auth/forgot-password', data)
    return redirect(response.data)
  } catch (error) {
    const errorMsg = error?.response?.data?.msg
    toast.error('Better luck next time')
    return null
  }
}

const ForgotPassword = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-slate-900 lg:bg-white ">
      <Form method="POST" className="">
        <h2 className="mb-2 lg:mb-4 text-sm font-semibold text-white lg:text-black lg:text-lg text-center">
          If you want to reset your password,
          <span> Please enter your email address</span>
        </h2>
        {/* <p></p> */}
        <div className="flex flex-col gap-5 md:border px-2 py-2 md:py-5 lg:px-4 hover:shadow-lg hover:shadow-indigo-500/50 rounded-md">
          <div className="lg:w-[500px]  ">
            <CommonFormLayout
              type="email"
              name="email"
              placeholder="enter your email address here"
              label="Email"
            />
          </div>
          <SubmitButtonCommon
            tex="Submit"
            navigationState="Submitting..."
            className="basis-1/4"
          />
        </div>
      </Form>
    </div>
  )
}
export default ForgotPassword

// lg:flex lg:flex-col lg:gap-y-4 lg:items-center lg:justify-start
