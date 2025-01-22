require('dotenv').config()
require('express-async-errors')
// require express
const express = require('express')
const app = express()
const path = require('path')
// require DataBase
const connectDB = require('./DB/dbConnection')

// rest of the packages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const { rateLimit } = require('express-rate-limit')
const { xss } = require('express-xss-sanitizer')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')

// require routes
const authRouter = require('./Routes/authRoutes')
const userRouter = require('./Routes/userRoutes')
const taskRouter = require('./Routes/taskRoutes')

// require middlewares
const notFoundmiddleWare = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.set('trust proxy', 1)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 mins
  limit: 60, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})
app.use(limiter)
app.use(helmet())
app.use(cors())
// app.use(express.static(path.resolve(__dirname, './public/dist')))
app.use(express.static(path.resolve(__dirname, './public/dist')))
app.use(xss())
app.use(mongoSanitize())

app.use(express.json())
app.use(cookieParser(process.env.Signed_Cookie))

// Routes
app.use(
  'https://mern-stack-1-login-with-tasks-without.onrender.com/api/v1/auth',
  authRouter
)
app.use(
  'https://mern-stack-1-login-with-tasks-without.onrender.com/api/v1/users',
  userRouter
)
app.use(
  'https://mern-stack-1-login-with-tasks-without.onrender.com/api/v1/tasks',
  taskRouter
)

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public/dist', 'index.html'))
// })
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/dist', 'index.html'))
})

// Error middlewares
app.use(notFoundmiddleWare)
app.use(errorHandlerMiddleware)

// Port number
const port = process.env.PORT || 5000

// Function to connect to server DB and port
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log('the server is listening on port 5000....')
    )
  } catch (error) {
    console.log(error)
  }
}

start()
