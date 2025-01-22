import { Link, useLoaderData } from 'react-router-dom'
import CommonButtonLayout from '../Components/CommonButtonLayout'
import axios from 'axios'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { BaseURL } from '../../Utils/BaseUrl'
dayjs.extend(advancedFormat)

export const loader = async ({ params }) => {
  // const response = await axios.get('/api/v1/tasks/' + params.id)

  const response = await BaseURL.get(`/api/v1/tasks/${params.id}`)
  const getSingleTask = response.data

  return getSingleTask
}

const Single_Task = () => {
  const { task } = useLoaderData()

  const { name, completed, _id: id, createdAt, updatedAt } = task

  const date = dayjs(createdAt).format('@ hh:mm a - on MMM Do, YYYY')
  const updatedDate = dayjs(updatedAt).format('@ hh:mm a - on MMM Do, YYYY')
  // function getDate() {
  //   const today = new Date()
  //   const month = today.getMonth() + 1
  //   const year = today.getFullYear()
  //   const date = today.getDate()
  //   return `${month}/${date}/${year}`
  // }

  return (
    <div className="max-lg:h-[calc(100%-40px)] h-[calc(100%-56px)] grid place-items-center bg-slate-800 lg:bg-white grid-rows-2">
      <div className="w-11/12 flex flex-col text-center max-w-xl gap-y-4 lg:border-2 shadow-lg lg:shadow-md lg:shadow-cyan-500/50 shadow-cyan-500/50 py-4 self-end ">
        <h2 className="lg:font-semibold text-base font-normal text-white lg:text-indigo-600 lg:text-2xl text-center drop-shadow-md">
          Your Task Details
        </h2>
        <h4 className="lg:mt-2 text-base font-semibold text-white lg:text-slate-500 lg:font-serif lg:text-lg drop-shadow-md">
          Task Name :
          <span className="text-md lg:text-xl lg:text-sky-700 text-blue-400 lg:font-sans capitalize lg:bg-sky-100 lg:px-2 lg:py-1 ml-1 rounded-md ">
            {name}
          </span>
        </h4>
        <h4 className="text-base font-semibold text-white lg:text-slate-500 lg:font-serif lg:text-lg drop-shadow-md ">
          Task Completed :
          <span className="text-base lg:text-xl text-red-500 lg:font-serif capitalize lg:bg-red-100 lg:px-2 lg:py-1 ml-1 rounded-md">
            {String(completed)}
          </span>
        </h4>
        <h5 className="text-base font-semibold text-white lg:text-slate-500 lg:font-serif lg:text-xl drop-shadow-md ">
          Created At :{' '}
          <span className="text-base lg:text-lg text-sky-500 drop-shadow-md">
            {date}
          </span>
        </h5>
        <h5 className="text-base font-semibold text-white lg:text-slate-500 lg:font-serif lg:text-xl drop-shadow-md ">
          Updated At :{' '}
          <span className="text-base lg:text-lg text-sky-500 drop-shadow-md">
            {updatedDate}
          </span>
        </h5>
      </div>
      <Link to="/dashboard" className="self-start translate-y-6">
        <CommonButtonLayout text="Back to Tasks" />
      </Link>
    </div>
  )
}
export default Single_Task
