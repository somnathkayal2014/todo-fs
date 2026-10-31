import express from 'express'
import { createTodo, delTodo, getAllTodo, updateTodo} from '.././controller/todoController.js'

const todoRoute = express.Router()


todoRoute.post('/create', createTodo)
todoRoute.get('/getAll', getAllTodo)
todoRoute.put('/update/:id', updateTodo)
todoRoute.delete('/delete/:id', delTodo)

export default todoRoute