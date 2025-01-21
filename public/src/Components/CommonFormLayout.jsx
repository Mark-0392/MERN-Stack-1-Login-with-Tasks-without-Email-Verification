const CommonFormLayout = ({ type, name, defaultValue, placeholder, label }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-base tracking-wide font-Roboto_Bold_Italic lg:text-lg lg:tracking-normal text-white  px-1 lg:text-black"
      >
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        className="w-full h-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-gray-500 mt-1 p-2"
      />
    </div>
  )
}
export default CommonFormLayout
