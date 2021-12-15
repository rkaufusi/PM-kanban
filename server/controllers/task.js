import taskModel from '../models/taskModel.js'

export const getTasks = async (req, res) => {
    try {
        const allTasks = await taskModel.find();

        res.status(200).json(allTasks);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createTask = async (req, res) => {
    const task = req.body;
    const newTask = new taskModel(task);
    console.log('here ' + newTask);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    res.send('Router is working');
};

export const deleteTask = async (req, res) => {
    const id = req.params.id;
    console.log(`id to delete ${id}`);
    try {
        await taskModel.findByIdAndRemove(id).exec();
        res.send('Successfull deletion');
    } catch (error) {
        console.log('error ' + error);
    }
};