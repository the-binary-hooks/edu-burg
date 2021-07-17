const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,()=>{
    console.log("Server is running!")
});
