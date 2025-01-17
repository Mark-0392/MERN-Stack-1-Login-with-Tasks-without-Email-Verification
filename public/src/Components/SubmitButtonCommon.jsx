import { useNavigation } from 'react-router-dom'

const SubmitButtonCommon = ({ text, width, height, navigationState }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${width} ${height} flex justify-center items-center py-2 px-4 border border-transparent rounded shadow-md text-sm lg:text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 `}
    >
      {isSubmitting ? navigationState : text || 'Submit'}
    </button>
  )
}
export default SubmitButtonCommon
