// Function to delete the task on clicking delete button
//   const navigate = useNavigate()
const handleClick = async () => {
  const id = updatedTaskReal._id
  try {
    const response = await axios.delete(`/api/v1/tasks/${id}`)
    console.log(response)
    toast.success(response.data.msg)
    return navigate('/dashboard')
  } catch (error) {
    const errorMsg = error.response.data.msg
    console.log(errorMsg)
  }
}

// Getting the single task from landing
const updatedTaskReal = tasks1.find((singeTask) => {
  const { _id: id } = singeTask
  return id
})
console.log(updatedTaskReal)
