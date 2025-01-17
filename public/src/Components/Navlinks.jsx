import { NavLink, redirect, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaEnvelopeOpenText,
  FaUserEdit,
  FaHandshake,
} from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { PiSignOutBold, PiPasswordBold } from 'react-icons/pi'

import { BsInfoCircleFill } from 'react-icons/bs'
import { logoutUser } from '../../Features/Users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectText,
  closeNav,
  Active,
  closeSetting,
} from '../../Features/Settings/settingSlice'
import axios from 'axios'
import { toast } from 'react-toastify'

const navlinks = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'newsLetter',
    text: 'News Letter',
  },
  {
    id: 4,
    url: 'credits',
    text: 'Credits',
  },
]

const links_With_Icon = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Home',
    icon: <FaHome size={20} />,
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
    icon: <BsInfoCircleFill size={20} />,
  },
  {
    id: 3,
    url: 'newsLetter',
    text: 'News Letter',
    icon: <FaEnvelopeOpenText size={19} />,
  },
  {
    id: 4,
    url: 'credits',
    text: 'Credits',
    icon: <FaHandshake size={25} />,
  },
  {
    id: 5,
    url: 'user/updateUserDetails',
    text: 'Edit/update Your Details',
    icon: <FaUserEdit size={20} />,
  },
  {
    id: 6,
    url: 'user/updateUserPassword',
    text: 'Edit/update Your Password',
    icon: <PiPasswordBold size={20} />,
  },
]

export const Navlinks = () => {
  const { isActive } = useSelector((state) => state.setting)
  const dispatch = useDispatch()
  return (
    <>
      {navlinks.map((link) => {
        const { id, url, text } = link
        return (
          <li
            key={id}
            className={`text-sm font-BlackOps_Regular lg:font-medium lg:text-xl  rounded-md px-2  duration-500 ease-in-out cursor-pointer lg:text-red-400 ${
              isActive === text
                ? 'bg-white rounded-md text-white transition-all ease-in  duration-700 '
                : 'bg-none'
            }`}
            onClick={() => dispatch(Active(text))}
          >
            <NavLink to={url} className={``}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}

export const Navlink_With_Icon = () => {
  const { isSelectedText } = useSelector((state) => state.setting)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = async () => {
    try {
      const response = await axios.delete('/api/v1/auth/logout')
      toast.success('You are logged out successfully')
      return navigate('/login')
    } catch (error) {
      console.log(error)
    }
    dispatch(logoutUser())
  }
  return (
    <div>
      <ul className=" flex flex-col gap-y-4 py-4 text-white ">
        {links_With_Icon.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li
              key={id}
              onClick={() => {
                dispatch(selectText(text))
                dispatch(closeNav())
              }}
            >
              <NavLink
                to={url}
                className={`flex gap-x-2 w-10/12 items-center text-base text-white font-semibold px-2 capitalize h-12 rounded-r-full  transition-all ease-in-out duration-500 ${
                  isSelectedText === text
                    ? 'bg-red-500 text-white ml-2'
                    : 'text-white'
                }`}
              >
                <span className={`text-white pl-1 `}>{icon}</span>
                {text}
              </NavLink>
            </li>
          )
        })}
        <button
          type="button"
          className="inline-flex gap-2 items-center px-[10px] py-2 hover:bg-red-500 hover:text-white hover:rounded-sm transition-all duration-700 text-sm"
          onClick={handleClick}
        >
          <PiSignOutBold size={22} />
          Sign Out
        </button>
      </ul>
    </div>
  )
}
