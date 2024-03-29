import { config } from 'dotenv'
config()

export const ENVIRONMENTS = {
  PORT: process.env.PORT,
  CONNECT_MONGO: process.env.MONGO_CONECT,
  SECRET: process.env.SECRET,
  DISCORD: process.env.DISCORD,
  DOMAIN: process.env.DOMAIN ?? 'http://localhost:246',
  SESSION_SECRET: process.env.DOMAIN ?? 'HelloQutool',
  BOT_TOKEN: process.env.BOT_TOKEN,
  PAGE_DOMAIN: process.env.PAGE_DOMAIN ?? 'https://qutool.vercel.app',
  IN_DEVELOPING: process.env.DEVELOPING !== undefined
}

export const PATH_PREFIX = '/api/'

export const ORIGINS = process.env.ORIGINS?.split(/ +/g) ?? '*'

export const VISIT_COOLDOWN_TIME = 10 * 60 * 1000
