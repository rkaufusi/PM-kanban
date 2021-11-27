export const getTasks = async (req, res) => {
    try {
        const allTasks = await task.find();

        res.status(200).json(allTasks);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createTask = async (req, res) => {
    const task = req.body;
    const newTask = new taskModel(task);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    res.send('Router is working');
};