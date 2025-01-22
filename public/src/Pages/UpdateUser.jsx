import { Form, redirect } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import axios from 'axios'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.patch('api/v1/users/updateUser', data)

    toast.success(response.data.msg)
    // toast.success(
    //   'Please login with your new updated email address to continue'
    // )
    return redirect('/login')
  } catch (error) {
    const errorMsg = error?.response?.data?.msg

    console.log(errorMsg)
    return null
  }
}

const UpdateUser = () => {
  return (
    <div className="max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] grid place-items-center bg-slate-800 lg:bg-white">
      <Form
        method="patch"
        className=" w-11/12 max-w-[500px] grid grid-flow-row gap-y-5 rounded-lg  px-4 lg:mx-0 hover:shadow-lg hover:shadow-purple-400 lg:hover:shadow-lg lg:hover:shadow-fuchsia-400/50  duration-700 py-2 border"
      >
        <h1 className="text-base font-semibold text-white lg:text-black lg:text-2xl text-center  items-center font-Playfair_SemiBold ">
          Update Your Email and Name
        </h1>
        <div className="mb-3">
          <div className="mb-3 ">
            <CommonFormLayout
              type="email"
              name="email"
              placeholder="enter your email address here"
              label="Email"
            />
          </div>
          <div>
            <CommonFormLayout
              type="text"
              name="name"
              placeholder="enter your name here"
              label="Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <SubmitButtonCommon text="Submit" navigationState="sending" />
        </div>
      </Form>
    </div>
  )
}
export default UpdateUser
