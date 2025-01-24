import { Form, redirect, useLoaderData, useParams } from 'react-router-dom'
import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'

export const loader = async ({ params }) => {
  try {
    const response = await axios.get(`/api/v1/tasks/${params.id}`)
    const SingleTask = response.data
    return SingleTask
  } catch (error) {
    const errorMsg = error?.response?.data?.msg
    console.log(errorMsg)
    return null
  }
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const name = await formData.get('task')
  let completed = await formData.get('completed')
  if (completed === 'on') {
    completed = true
  } else {
    completed = false
  }
  const data = {
    name,
    completed,
  }

  const url = request.url
  const value = url.split('/editTasks/')[1]

  try {
    const response = await axios.patch(`/api/v1/tasks/${value}`, data)
    const updatedTask = response.data.tasks
    toast.success(response.data.msg)
    return redirect('/dashboard')
  } catch (error) {
    const errorMsg = error?.response?.data?.msg
    console.log(errorMsg)
  }
}

const EditTasks = () => {
  const { task } = useLoaderData()

  return (
    <div className="h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)]  grid place-items-center bg-landing bg-cover bg-no-repeat bg-center">
      <Form
        className="w-11/12 max-w-xl grid gap-y-4 max-sm:mt-12  border border-white rounded-md  px-2 py-4 "
        method="patch"
      >
        <h1 className="text-lg font-  bold text-slate-900 lg:text-xl text-center">
          Edit Task
        </h1>
        <div className="grid lg:grid-cols-4 items-center space-y-1">
          <label
            htmlFor="task"
            className="block lg:col-span-1 text-sm md:text-lg font-serif  text-black mb-1 px-2 "
          >
            Task
          </label>
          <input
            type="text"
            id="task"
            defaultValue={task.name}
            name="task"
            className="w-full lg:col-span-3 h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-base text-gray-800 p-2"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          <label
            htmlFor="isCompleted"
            className="block lg:col-span-1 text-sm md:text-lg font-serif  text-slate-900 px-2 "
          >
            Task Completed
          </label>
          <input
            type="checkbox"
            id="isCompleted"
            name="completed"
            defaultChecked={task.completed}
            className=" h-4 w-4 rounded-md border-gray-500 lg:ml-1 lg:col-span-3"
          />
        </div>
        <div className="">
          <SubmitButtonCommon
            text="Confirm my Edit"
            navigationState="saving..."
            width="w-full"
          />
        </div>
      </Form>
    </div>
  )
}
export default EditTasks

// <div className="min-h-screen flex justify-center items-center border bg-slate-800 lg:bg-white">
//   <Form method="POST" className="border w-11/12 max-w-xl ">
//     <div className="border justify-self-center">hello there</div>
//     <div className="border">hello there</div>
//     <div className="border">hello there</div>
//   </Form>
// </div>
