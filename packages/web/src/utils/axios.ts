import axios, { AxiosInstance } from 'axios'

export const useAxios = (path: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/${path}`,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    }
  )

  return axiosInstance
}
