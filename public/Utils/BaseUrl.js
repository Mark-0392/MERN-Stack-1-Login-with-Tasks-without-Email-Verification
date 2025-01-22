import axios from 'axios'

const productionServerURL =
  'https://mern-stack-1-login-with-tasks-without.onrender.com'

export const BaseURL = axios.create({
  baseURL: productionServerURL,
})
