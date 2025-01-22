import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

import Sidebar from '../Components/Sidebar'
import Loading from '../../Utils/loading'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <div className="h-screen bg-slate-50 max-w-6xl mx-auto relative">
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
