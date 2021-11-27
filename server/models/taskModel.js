import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    column: String,
    project: String,
    progress: String,
    title: String,
    description: String,

});

const task = mongoose.model('task', taskSchema);

export default task;