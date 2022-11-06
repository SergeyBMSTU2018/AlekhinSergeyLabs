import express, { json, urlencoded } from 'express'
import { developmentConfig } from './config'
import { router } from './routes'
import { logMiddleware, errorMiddleware, notFoundMiddleware } from './middleware'

const app = express();

app.use(json())
app.use(urlencoded({ extended: true }));

app.use(logMiddleware)

app.use('/api', router)

app.use('*', notFoundMiddleware)
app.use(errorMiddleware)

const config = developmentConfig.server

app.listen(config.port, () => {
  console.log(`🚀 server is listening on http://localhost:${config.port}/`)
})
