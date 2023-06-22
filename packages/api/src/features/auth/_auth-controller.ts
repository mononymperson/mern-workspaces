import { ApiResponse } from '@mern-monorepo/common'
import { Request, Response } from 'express'

export const index = (req: Request, res: Response<ApiResponse<any>>) => {
  return res.json({
    code: 200,
    message: 'success',
    data: null,
  })
}
