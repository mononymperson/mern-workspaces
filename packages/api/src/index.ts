import cors from 'cors'
import express, { Request } from 'express'
import { env } from './constans'
import { connectDB } from './db'
import { todo } from './features/todo'
import { errorHandler, responseHandler } from './handlers'
import { TypedResponse } from './interfaces'
;(async function () {
  const app = express()

  app.use(
    cors({
      origin: '*',
    })
  )

  app.use(express.json())
  app.use(responseHandler)

  app.use('/todo', todo.router)

  app.get('/', (req: Request, res: TypedResponse<string>) => {
    res.json({
      data: 'Api version: ' + env.API_VERSION,
    })
  })

  app.use(errorHandler)

  try {
    await connectDB()

    app.listen(env.PORT, () => {
      console.log(`API server is running on port ${env.PORT}`)
    })
  } catch (error) {
    console.log('Failed to start server', error)
    process.exit(1)
  }
})()
