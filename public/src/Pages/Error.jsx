import { Link, useRouteError } from 'react-router-dom'
import ErrorImage from '../assets/ErrorPageImages/error.svg'
import CommonButtonLayout from '../Components/CommonButtonLayout'
function Error() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <main className="grid place-items-center min-h-screen lg:grid-cols-2 px-8">
        <div className="self-end lg:self-center mb-1">
          <img src={ErrorImage} alt="error image" />
        </div>
        <div className="text-center self-start lg:self-center lg:place-self-start max-w-xl">
          <h1 className=" font-bold text-2xl xl:text-9xl ">{error.status}</h1>
          <h4 className="mb-2 font-medium text-md ">
            Oops! I knew somehow you would reach here. Don't worry I am here to
            redirect you to the right page
          </h4>
          <div className="grid place-items-center">
            <p className="mb-4 font-semibold text-lg">
              click the <span className="text-red-600">'Back Home'</span> button
              to get back to the Home Page
            </p>
            <Link to="/">
              <CommonButtonLayout text="Back Home" />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="grid place-items-center min-h-screen  px-8">
      <h1 className="font-bold text-4xl">something went wrong...</h1>
    </main>
  )
}
export default Error

//  <div>
//             <img src={ErrorImage} alt="error image" />
//           </div>
//           <div>
//             <h1>{error.status} </h1>
//             <h4>
//               Oops! I knew somehow you would reach here. Don't worry I am here
//               to redirect you to the right page
//             </h4>
//             <div>
//               <p>click here to get back to the Home Page</p>
//               <CommonButtonLayout text="Back Home" />
//             </div>
//           </div>
