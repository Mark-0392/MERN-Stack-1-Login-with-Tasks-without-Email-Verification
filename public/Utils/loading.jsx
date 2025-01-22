import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Loading = () => {
  return (
    <div className="flex justify-center items-center max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)]">
      <div className=" flex justify-center items-center gap-x-2 h-40 ">
        <h1 className="text-lg font-medium text-red-400">Loading . . . </h1>
        <div className="text-black">
          <AiOutlineLoading3Quarters size={60} className="animate-spin " />
        </div>
      </div>
    </div>
  )
}
export default Loading
