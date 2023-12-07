const express=require('express')
const { getTodo, createTodo, deleteTodo, updateTodo } = require('../controllers/todo.controller')
const router=express.Router()
router.get('/',getTodo)
router.post('/',createTodo)
router.delete('/',deleteTodo)
router.patch('/',updateTodo)

module.exports=router
