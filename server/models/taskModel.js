import mongoose from 'mongoose';


const taskSchema = mongoose.Schema({
    column: String,
    project: String,
    title: String,
    description: String,
});

const taskModel = mongoose.model('task', taskSchema);

export default taskModel;
