import { ApiResponse } from '@mern-monorepo/common'
import { Request, Response } from 'express'

export const getAlluser = (req: Request, res: Response<ApiResponse<[]>>) => {
  res.json({
    code: 200,
    message: 'success',
    data: [],
  })
}
