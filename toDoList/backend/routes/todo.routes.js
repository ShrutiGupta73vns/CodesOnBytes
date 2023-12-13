const express=require('express')
const { getTodo, createTodo, deleteTodo, updateTodo,updateChecked} = require('../controllers/todo.controller')
const router=express.Router()
router.get('/',getTodo)
router.post('/',createTodo)
router.delete('/:id',deleteTodo)
router.patch('/:id',updateTodo)
router.patch('/checked/:id',updateChecked)

module.exports=router
