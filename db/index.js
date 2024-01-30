const mongoose = require('mongoose')
require('dotenv').config()

let dbURL = 
  process.env.NODE_env === 'production'
    ? process.env.MONGODB_URI
    : 'mongoURL:/127.0.0.1:27017/EcoFeet'
console.log(process.env.MONGODB_URI)

mongoose
  .connect(
    `${process.env.MONGODB_URI}`
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db