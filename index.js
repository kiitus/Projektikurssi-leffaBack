const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose')

const moviesRouter = require(`./controllers/movies`)
const usersRouter = require(`./controllers/users`)
const loginRouter = require(`./controllers/login`)
require('dotenv').config()

const mongoUrl = process.env.MONGO

mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
    })

app.use(cors())
app.use(express.json())
app.use(express.static('build'))




app.use('/api/users', usersRouter)
app.use('/api/movies', moviesRouter)
app.use(`/api/login`, loginRouter)


app.get('*', (req,res) =>{

  res.sendFile(path.join(__dirname+'/build/index.html'));
 
});

const PORT =  process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})