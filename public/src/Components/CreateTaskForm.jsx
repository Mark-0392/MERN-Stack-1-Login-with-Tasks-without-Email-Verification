import { useRef } from 'react'

const CreateTaskForm = ({ type, name }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 px-2 border rounded-sm py-4">
      <input
        type={type}
        name={name}
        // placeholder="e.g. buy mangoes"
        className="w-full h-12 md:h-10 border px-4 py-2 border-gray-300 rounded-lg md:rounded-r-none md:rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 basis-3/4"
      />

      <button
        type="submit"
        className="basis-1/4 h-12 md:h-10 flex justify-center items-center py-2 px-4 border border-transparent rounded-lg md:rounded md:rounded-l-none shadow-md text-xs lg:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
      >
        Create Task
      </button>
    </div>
  )
}
export default CreateTaskForm
