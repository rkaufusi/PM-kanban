import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import './App.css';
import Task from './components/showTask/showTask.js';
import CreateTask from './components/createTask/createTask.js'
import useStyles from './styles.js'
import TaskColumn from './components/column/taskColumn.js'
import {useState} from 'react';
/*     column: String,
    project: String,
    progress: String,
    title: String,
    description: String, */

function App() {
  const classes = useStyles();
  const [taskList, setTaskList] = useState([
    {column: "To Do", project: "React Project", title: "Task 1", dsecription: "Plan out component flow"},
    {column: "To Do", project: "React Project", title: "Task 2", dsecription: "Draw app look and feel"},
    {column: "To Do", project: "React Project", title: "Task 3", dsecription: "intiitialize git repo"},
  ]);
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Tasks</Typography>
        </AppBar>
        <TaskColumn tasksList={taskList}/>
        
      </Container>
    </div>
  );
}

export default App;
