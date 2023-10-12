import express from 'express'
import path from 'path'
import type { Router, Express, Request, Response, NextFunction } from 'express'
import type { ServerError } from '../types/types'

const { createServer } = require('http')

const PORT = 3000

const app = express()
const server = createServer(app)

app.use(express.json())

// general endpoint for routes

// app.use('/taco', tacoController)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

// error handler for bad routes/requests to backend
app.use((req: Request, res: Response) => {
  res.status(404).send('The page does not exist.')
})

// global error handler for all middleware and routes
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Error caught in global handler',
    status: 500,
    message: { err: 'An error occurred' },
  }
  const errorObj = { ...defaultErr, ...err }
  console.log(errorObj.log)
  console.log(err)
  return res.status(errorObj.status).json(errorObj.message)
})
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
export default app
