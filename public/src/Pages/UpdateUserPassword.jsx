import { Form, redirect } from 'react-router-dom'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import axios from 'axios'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.patch('/api/v1/users/updateUserPassword', data)
    toast.success(response.data.message)
    toast.success('Please login with the new password to continue')
    return redirect('/login')
  } catch (error) {
    const errorMsg = error?.response?.data?.msg
    console.log(errorMsg)
    return null
  }
}

const ResetPassword = () => {
  return (
    <div className="max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] flex justify-center items-center  bg-slate-800 lg:bg-white">
      <Form
        method="PATCH"
        className="px-2 max-w-xl flex-1 flex flex-col lg:border gap-y-6 py-4 hover:shadow-lg hover:shadow-purple-400 lg:hover:shadow-lg lg:hover:shadow-fuchsia-400/50  duration-700"
      >
        <h2 className="text-base font-semibold text-white lg:text-black lg:text-2xl text-center font-DM_Serif_FontBold tracking-wider">
          Update Your Password
        </h2>
        <div className="flex gap-1 justify-center items-center">
          <label
            htmlFor="oldPassword"
            className="block basis-1/3 text-sm font-medium lg:text-base text-white mb-1 px-2 lg:text-black"
          >
            Old Password
          </label>
          <input
            type="text"
            id="oldPassword"
            placeholder="Enter your old password here"
            name="oldPassword"
            required
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 p-2"
          />
        </div>
        <div className="flex gap-1 justify-center items-center">
          <label
            htmlFor="newPassword"
            className="block basis-1/3 text-sm font-medium lg:text-base text-white mb-1 px-2 lg:text-black"
          >
            New Password
          </label>
          <input
            type="text"
            id="newPassword"
            placeholder="Enter your new password here"
            name="newPassword"
            required
            className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 mt-1 p-2"
          />
        </div>
        <SubmitButtonCommon text="Submit" navigationState="submitting..." />
        {/* <div className="self-end w-[413.5px] ">
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded shadow-md text-sm lg:text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div> */}
      </Form>
    </div>
  )
}
export default ResetPassword
