//create a server with express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users',require('./dataBase/users.js'))
app.use('/news',require('./dataBase/news.js'))

// app.get('/users',(req,res)=>{

//   res.send(req,req.boy)
// })

// app.post('/news',(req,res)=>{

//   res.send(req,req.boy)
// })

// post req coming from the todos, you handle it and call the function save
  // to the database
  
const port = 4000
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
}) 