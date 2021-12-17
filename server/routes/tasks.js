import express from 'express';
import {getTasks, createTask, deleteTask, updateTask} from '../controllers/task.js'
import task from '../models/taskModel.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);


export default router;