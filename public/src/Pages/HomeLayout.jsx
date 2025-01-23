import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import Sidebar from '../Components/Sidebar'
import Loading from '../../Utils/loading'

export const loader = async () => {
  try {
    const response = await axios.get('/api/v1/users/showMe')

    const user = response.data

    return user
  } catch (error) {
    const errorMsg = error.response.data.msg

    toast.warn('Sorry! You must login to view the page')
    return redirect('/login')
  }
}

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <div className="h-screen  max-w-6xl mx-auto relative">
        {/* {isPageLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar /> <Sidebar /> <Outlet />
          </>
        )} */}
        <Navbar />
        <Sidebar />
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  )
}
export default HomeLayout
