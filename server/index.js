import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
}

const PORT = process.env.port || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
