import Logo from '../assets/Landing Page Logo/noysi.svg'
import { Navlinks } from './Navlinks'

import { LuMenuSquare } from 'react-icons/lu'
import { IoSettingsOutline } from 'react-icons/io5'

import { useSelector, useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

import { logoutUser } from '../../Features/Users/userSlice'
import DropDownSetting from './DropDownSetting'

import { closeSetting } from '../../Features/Settings/settingSlice'

import { getUserDetails } from '../../Features/Users/userSlice'
import { useEffect } from 'react'

const Navbar = () => {
  // const user = useSelector((state) => state.userState.user)
  // useEffect(() => {
  //   dispatch(getUserDetails())
  // }, [])
  const dispatch = useDispatch()
  const { user } = useLoaderData()
  const { isOpen } = useSelector((state) => state.setting)

  return (
    <>
      <div className="">
        <nav className=" flex h-full justify-between items-center px-2 py-2 lg:py-3 lg:px-3 relative  bg-gradient-to-tr from-indigo-200 ">
          {/* Logo and the Name of the Company */}
          <div className="inline-flex gap-1 items-center space-x-1 ">
            <div>
              <img src={Logo} alt="logo" className="size-5 md:size-6 " />
            </div>
            <h1 className=" text-base lg:text-xl font-Roboto_Bold_Italic">
              Task App
            </h1>
          </div>

          {/* Navlinks */}
          <div className="hidden lg:flex">
            <ul className="flex gap-12  items-center">
              <Navlinks />
            </ul>
          </div>

          {/* UserName and logout button */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-BlackOps_Regular lg:text-base ">
              Hi!
              <span className="text-base md:text-xl text-pink-600 font-Ysabeau_Bold ">
                {' '}
                {user.userName}
              </span>
            </p>

            <button
              type="button"
              className="relative hidden lg:block"
              onClick={() => dispatch(closeSetting())}
            >
              <IoSettingsOutline size={25} />
            </button>
            {isOpen && <DropDownSetting />}

            {/* <button type="button" onClick={handleClick}>
            Logout
            </button> */}
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar

{
  /* menu button */
}
{
  /* <button type="button" className="lg:hidden">
          <LuMenuSquare size={22} />
          </button> */
}
