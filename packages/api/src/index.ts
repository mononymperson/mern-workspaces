import cors from 'cors'
import express from 'express'
import { env } from './constans'
import { connectDB } from './db'
import { auth } from './features/auth'
import { user } from './features/user'
;(async function () {
  const app = express()

  app.use(
    cors({
      origin: '*',
    })
  )

  app.get('/auth', auth.router)
  app.get('/user', user.router)

  app.get('/', (req, res) => {
    res.send({
      code: 200,
      message: 'success',
      data: 'API version: 1.0.0',
    })
  })

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
