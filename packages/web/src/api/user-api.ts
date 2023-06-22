import { ApiResponse } from '@mern-monorepo/common'
import axiosInstance from '../utils/axios'

export const useUserApi = () => {
  const getAllUser = async () => {
    const { data } = await axiosInstance.get<ApiResponse<[]>>('user')

    return data.data
  }

  return {
    getAllUser,
  }
}
