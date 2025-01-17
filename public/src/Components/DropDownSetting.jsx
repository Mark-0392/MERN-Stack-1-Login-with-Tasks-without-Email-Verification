import { Link, redirect, useNavigate } from 'react-router-dom'
import { PiSignOutBold, PiPasswordBold } from 'react-icons/pi'
import { FaUserEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../Features/Users/userSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { closeSetting } from '../../Features/Settings/settingSlice'
const dropDownLinks = [
  {
    id: 1,
    url: 'user/updateUserDetails',
    text: 'Edit/update Your Details',
    icon: <FaUserEdit size={20} />,
  },
  {
    id: 2,
    url: 'user/updateUserPassword',
    text: 'Edit/update Your Password',
    icon: <PiPasswordBold size={20} />,
  },
]

const DropDownSetting = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = async () => {
    try {
      const response = await axios.delete('/api/v1/auth/logout')
      toast.success('You are logged out successfully')
      return navigate('/')
    } catch (error) {
      // const errorMsg = error.response
      console.log(error)
    }
    dispatch(logoutUser())
  }
  return (
    <>
      <div
        className="border flex-col rounded-s-md absolute top-16 md:right-4 hidden lg:flex "
        onClick={(e) => dispatch(closeSetting())}
      >
        {dropDownLinks.map((link) => {
          const { id, url, text, icon } = link
          return (
            <Link
              key={id}
              to={url}
              className="flex gap-2 items-center  px-[10px] py-2 hover:bg-slate-500 hover:text-white border-l-8 border-indigo-500 "
            >
              {icon} {text}
            </Link>
          )
        })}

        <button
          type="button"
          className="inline-flex gap-2 items-center px-[10px] py-2 hover:bg-red-500 hover:text-white hover:rounded-sm duration-500"
          onClick={handleClick}
        >
          <PiSignOutBold size={20} />
          Sign Out
        </button>
      </div>
    </>
  )
}
export default DropDownSetting
