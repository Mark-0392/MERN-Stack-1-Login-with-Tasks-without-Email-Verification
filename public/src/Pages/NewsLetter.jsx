import CommonFormLayout from '../Components/CommonFormLayout'
import SubmitButtonCommon from '../Components/SubmitButtonCommon'
import img1 from '../../src/assets//icons8-newsletter.gif'
const NewsLetter = () => {
  return (
    <div className="grid place-items-center w-full px-2  mx-auto max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-56px)] bg-newsLetter bg-center bg-cover bg-no-repeat  ">
      <div className=" flex flex-col gap-y-4 lg:gap-y-8  flex-1 text-white  md:border-4 md:border-double md:border-violet-800 px-2 lg:px-8 py-4 lg:py-8 hover:shadow-md hover:shadow-violet-700 lg:hover:shadow-md lg:hover:shadow-pink-500  duration-700 rounded-md  md:mt-4 lg:mt-0">
        {/* <div className="mx-auto hidden lg:block ">
          <img src={img1} alt="" />
        </div> */}
        <div className="flex flex-col space-y-3">
          <h2 className=" lg:text-center font-bold text-base lg:text-2xl capitalize hidden lg:block">
            We will be glad if you can join us for better future
          </h2>
          <p className="capitalize font-light lg:font-serif text-md lg:text-xl text-center ml-4 lg:ml-0 md:text-lg ">
            Please subscribe to our newsletter for more exiting offers and to
            know more about us.
          </p>
        </div>
        <div className="flex gap-x-2 flex-1 gap-y-4 md:gap-y-0 md:flex-row flex-col ">
          <div className="basis-3/4">
            <CommonFormLayout
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email address here"
            />
          </div>
          <div className="basis-1/4 md:self-end ">
            <SubmitButtonCommon
              text="Subscribe"
              height="h-[42px]"
              width="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter

{
  /* <a target="_blank" href="https://icons8.com/icon/lFMUfgTJoAxH/email-open">Newsletter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
