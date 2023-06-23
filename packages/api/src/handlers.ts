import { ApiResponse } from '@mern-monorepo/common'
import { NextFunction, Request, Response } from 'express'
import mung from 'express-mung'

export const responseHandler = mung.json((body) => {
  return {
    code: 200,
    message: 'success',
    ...body,
  } as ApiResponse<any>
})

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({
    code: 400,
    data: err.message,
    error: err.stack?.split('\n'),
  } as ApiResponse<any>)
}
