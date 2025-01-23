import {
  Outlet,
  useNavigation,
  useLoaderData,
  redirect,
} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import Sidebar from '../Components/Sidebar'
import Loading from '../../Utils/loading'
import Loading2 from '../../Utils/Loading2'
import { toast } from 'react-toastify'

export const loader = async () => {
  // const response = await axios.get('/api/v1/users/showMe')
  // if (response.status === 401) {
  //   toast.warn('You must be logged in to view this page. Please login')
  //   return redirect('/login')
  // }
  // const user = response.data
  // return user
  try {
    const response = await axios.get('/api/v1/users/showMe')

    const user = response.data

    return user
  } catch (error) {
    const errorMsg = error.response.data.msg

    if (error.status === 401) {
      toast.warn('Sorry! You must login to view the page')
      return redirect('/login')
    }
    // return redirect('/login')
  }
}

const HomeLayout = () => {
  const { user } = useLoaderData()

  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <div className="h-screen  max-w-6xl mx-auto relative">
        {isPageLoading ? (
          <Loading2 />
        ) : (
          <>
            <Navbar />
            <Sidebar />
            {isPageLoading ? <Loading /> : <Outlet />}
          </>
        )}
      </div>
    </>
  )
}
export default HomeLayout

{
  /* {isPageLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar /> <Sidebar /> <Outlet />
          </>
        )} */
}
