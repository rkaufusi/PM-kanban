import express from 'express';
import {getTasks, createTask} from '../controllers/task.js'
import task from '../models/taskModel.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);


export default router;