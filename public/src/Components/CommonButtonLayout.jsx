function CommonButtonLayout({ text }) {
  return (
    <button
      type="button"
      className=" flex justify-center items-center py-2 px-4 border border-transparent rounded shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {text}
    </button>
  )
}
export default CommonButtonLayout
