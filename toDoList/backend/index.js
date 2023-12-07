const express=require('express')
const configDB=require('./config/db.config')
const errorHandler= require('./middlewares/errorhandler')
const todoRoute=require('./routes/todo.routes')
require('dotenv').config()

const app=express()
app.use(express.json())
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
configDB()
app.use(errorHandler)
//routes
app.use('/api/v1/todo',todoRoute)