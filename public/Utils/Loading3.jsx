const Loading3 = () => {
  return (
    <div className="  w-full h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] px-2  mx-auto flex flex-col items-center justify-center bg-landing bg-cover bg-no-repeat bg-center">
      <div className="max-w-xl mx-auto w-full py-4  ">
        {/* <h2>hello there</h2> */}
        {/* <h2 className="text-center max-sm:text-lg  mb-2 lg:text-3xl font-LeckerLi_One_Regular">
          Add Tasks
        </h2> */}
        <div className=" flex flex-col gap-4 sm:flex-row sm:gap-0 px-2 border rounded-sm py-4 animate-pulse">
          {/* 2 divs should be here */}
          <div className="z-50 w-full h-12 md:h-10 border px-4 py-2 border-gray-300 rounded-lg md:rounded-r-none md:rounded-lg shadow-sm bg-white"></div>
          <div className="basis-1/4 h-12 md:h-10 flex justify-center items-center py-2 px-4 border border-transparent rounded-lg md:rounded md:rounded-l-none shadow-md bg-indigo-600"></div>
        </div>
      </div>
    </div>
  )
}
export default Loading3
