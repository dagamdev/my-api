import express from 'express'
import { PATH_PREFIX, ORIGINS } from './utils/config'
import cors from 'cors'

import analyticsRoutes from './analytics/analytics.routes'
import webRoutes from './web/web.routes'

export const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors({
  origin: ORIGINS,
  credentials: true
}))

app.use(PATH_PREFIX + 'analytics', analyticsRoutes)
app.use(PATH_PREFIX + 'web', webRoutes)

app.get(PATH_PREFIX, (_, res) => {
  res.json({ response: 'Hello, how are you?' })
})

app.get(PATH_PREFIX + 'ping', (_, res) => {
  res.json({ message: 'pong' })
})

app.use((_, res) => {
  res.status(404).json({
    status: 404,
    message: 'This route does not exist'
  })
})
