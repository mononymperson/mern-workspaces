import { ApiResponse, saveTodoSchema } from '@mern-monorepo/common'
import { NextFunction, Request, Response } from 'express'

export const validateSave = async (
  req: Request,
  res: Response<ApiResponse<undefined>>,
  next: NextFunction
) => {
  try {
    await saveTodoSchema.validate(req.body)

    next()
  } catch (error: any) {
    return res.status(400).json({
      code: 400,
      message: 'Validation Error',
      data: undefined,
      error: error.message,
    })
  }
}
