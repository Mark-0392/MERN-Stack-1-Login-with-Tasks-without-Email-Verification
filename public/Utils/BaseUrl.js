import axios from 'axios'

const productionServerURL = 'https://login-functionality-without.onrender.com/'

export const BaseURL = axios.create({
  baseURL: productionServerURL,
})
