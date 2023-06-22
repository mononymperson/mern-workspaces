import { Router } from 'express'
import { index } from './_auth-controller'

export const authRouter = Router()

authRouter.get('/', index)
