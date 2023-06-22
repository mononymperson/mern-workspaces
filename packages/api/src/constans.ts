require('dotenv').config()

type Env = {
  [key: string]: string
}

export const env: Env = process.env as Env
