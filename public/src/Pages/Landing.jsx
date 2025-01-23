import CreateTaskForm from '../Components/CreateTaskForm'

import { Form, redirect, useLoaderData } from 'react-router-dom'

import axios from 'axios'

import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'
import ShowTasks from '../Components/ShowTasks'

export const loader = async () => {
  try {
    const response = await axios.get('/api/v1/tasks/')
    const getAlltasks = response.data
    return getAlltasks
  } catch (error) {
    toast.warn('Sorry! Your session expired. Please log in')
    return redirect('/login')
  }
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post('/api/v1/tasks/', data)
    // console.log(response.data)
    toast.success('task created successfully')
    return response.data
  } catch (error) {
    const errorMsg = error.response.data.msg
    toast.error(errorMsg)
    return null
  }
}

const Landing = () => {
  const { tasks } = useLoaderData()

  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getUserDetails())
  // }, [])

  return (
    <div className="  w-full sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] px-2  mx-auto flex flex-col items-center justify-center  bg-landing bg-cover bg-no-repeat bg-center">
      <div className="max-w-xl mx-auto w-full py-4  ">
        {/* <h2>hello there</h2> */}
        <h2 className="text-center max-sm:text-lg  mb-2 lg:text-3xl font-LeckerLi_One_Regular">
          Add Tasks
        </h2>

        <Form method="post">
          <CreateTaskForm type="search" name="name" />
        </Form>

        {tasks.length === 0 ? (
          <p className="mt-2 text-center text-base md:text-lg lg:text-xl font-LeckerLi_One_Regular">
            no tasks yet. Start adding!
          </p>
        ) : (
          <div className="mt-2 max-w-xl mx-auto ">
            <ShowTasks tasks1={tasks} />
          </div>
        )}
      </div>
    </div>
  )
}
export default Landing

{
  /* <div className="mt-4 max-w-xl mx-auto">
        <div className="grid grid-flow-col grid-cols-4 px-2 border place-items-center py-2">
          <input
            type="checkbox"
            name="isCompleted"
            className="justify-self-start md:justify-self-end md:mr-4 "
          />
          <p className="justify-self-start font-medium md:font-semibold text-base md:text-xl">
            Buy Vegetables
          </p>
          <MdEditSquare size={20} className="justify-self-end cursor-pointer" />
          <MdDeleteForever
            size={25}
            className="justify-self-end cursor-pointer"
          />
        </div>
      </div>
    </div> */
}
// codiofull Codioful (formerly Gradienta)
