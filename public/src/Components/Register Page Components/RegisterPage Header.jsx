import { Link } from 'react-router-dom'

const RegisterPageHeader = () => {
  return (
    <div className="text-white lg:text-black mb-8 text-center">
      <h2 className=" font-DM_Serif_FontBold font-normal text-2xl md:text-3xl text-red-400 mb-2">
        Create an Account
      </h2>
      <p className="font-Roboto_Bold_Italic font-medium text-base pt-1  lg:text-xl">
        Already have an account?{' '}
        <Link
          to="/login"
          className=" font-DM_Serif_FontBold tracking-widest px-2 pb-1 font-semibold text-xl lg:text-2xl text-pink-600 hover:text-white  sm:max-md:text-blue-200 ml-1 drop-shadow-md brightness-125 border-x-2 lg:border-x-4 border-x-rose-600 rounded-md  border-y-red-400 hover:bg-rose-600 transition-all duration-200"
        >
          Login
        </Link>
      </p>
    </div>
  )
}
export default RegisterPageHeader
