import { ApiResponse } from '@mern-monorepo/common'
import { Response } from 'express'
import { Send } from 'express-serve-static-core'

export interface TypedResponse<T> extends Response {
  json: Send<Pick<ApiResponse<T>, 'data'>, this>
  send: Send<Pick<ApiResponse<T>, 'data'>, this>
}
