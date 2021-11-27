import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import taskRoutes from './routes/tasks.js'

const app = express();
app.use(cors());

app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({limit: "20mb", extended:true}));

// app.use route
app.use('/tasks', taskRoutes);
// connection url
const CONNECTION_URL = 'mongodb+srv://@project-manager.pjhrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// port
const PORT = process.env.port || 5000;

//mongoose.connect promise
mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})).catch((error) => console.log(error.message));