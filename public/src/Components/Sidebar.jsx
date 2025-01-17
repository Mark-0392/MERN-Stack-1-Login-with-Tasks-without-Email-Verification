import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav } from '../../Features/Settings/settingSlice'
import { Navlink_With_Icon } from './Navlinks'
import { useRef } from 'react'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state) => state.setting)
  return (
    <>
      <aside
        className={` h-[calc(100%-40px)] md:h-[calc(100%-44px)] w-[225px]  bg-slate-800 absolute top-[40px] md:top-[44px] flex flex-col transition-all ease-out duration-700 lg:hidden z-50  ${
          isNavOpen ? ' translate-x-0' : '-translate-x-full'
          // isNavOpen ? ' w-[200px]' : 'w-0'
        } `}
      >
        <div>
          {isNavOpen && (
            <div>
              <Navlink_With_Icon />
            </div>
          )}

          <div
            className="w-8 h-10 md:w-8 md:h-16  bg-red-500/10 border border-l-0 border-black/50 backdrop-blur-md border-opacity-70 text-sky-700 absolute top-2 left-full rounded-r-md  -translate-x-1 flex items-center justify-center "
            onClick={() => dispatch(closeNav())}
          >
            <div
              className={`transition-all delay-300  duration-700  p-[4px]  animate-pulse   text-white ${
                isNavOpen ? 'rotate-180' : 'rotate-0'
              }`}
              // style={{
              //   transform: isNavOpen ? `rotate(180deg)` : `rotate(0deg)`,
              // }}
            >
              <div className="">
                <MdOutlineArrowForwardIos size={18} />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
export default Sidebar
