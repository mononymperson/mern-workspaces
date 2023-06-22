import mongoose from 'mongoose'
import { env } from './constans'

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URL)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Failed to connect mongoDB', error)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
  } catch (error) {
    console.log('Failed to disconnect mongoDB', error)
  }
}
