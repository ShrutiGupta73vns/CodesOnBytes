const todo=require('../models/todo.model')
const customErrorHandler=require('../middlewares/customerrorhandler')

const getTodo=(req,res)=>{
res.send('display todo list')
}
const createTodo=async(req,res,next)=>{
    try {
        const {title,description}=req.body
        if(!title){
            return next(customErrorHandler(401,'Title is mandatory'))
            
        }
        const todoItem= await todo.create({title,description})
            res.status(201).json(todoItem)
    } catch (error) {
        next(error)
    }
}
const updateTodo=(req,res)=>{
    res.send('updated')
}
const deleteTodo=(req,res)=>{
    res.send('deleted')
}

module.exports={getTodo,createTodo,updateTodo,deleteTodo}