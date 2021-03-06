import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import './App.css';
import Task from './components/showTask/showTask.js';
import CreateTask from './components/createTask/createTask.js'
import useStyles from './styles.js'
import {useState, useEffect} from 'react';
import MyAppBar from './components/table/menu.js';
import axios from 'axios';

/*     column: String,
    project: String,
    progress: String,
    title: String,
    description: String, */

function App() {
  const classes = useStyles();
  /*
  const [taskList, setTaskList] = useState([
    {column: "To Do", project: "React Project", title: "Task 1", description: "Plan out component flow"},
    {column: "To Do", project: "React Project", title: "Task 2", description: "Draw app look and feel"},
    {column: "To Do", project: "React Project", title: "Task 3", description: "intiitialize git repo"},
  ]); */
  const [taskList, setTaskList] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then((allTasks) => {
      setTaskList(allTasks.data);
    })
  },[]);

  console.log(`app taskList ${taskList}`);

  return (
    <div className="App">
      <Container maxWidth="lg">
      <MyAppBar tasksList={taskList}/>
        
      </Container>
    </div>
  );
}

export default App;
