import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Description from './description.js';
import { Button } from '@mui/material';
import SaveButton from './saveButton.js';
import TaskStatus from './taskStatus.js';
import {useState} from 'react'
import axios from 'axios';
import Stack from '@mui/material/Stack';



export default function TaskFormNew({info, desc, status}) {
  const [task, setTask] = useState({
    column: status,
    project: 'React Project',
    title: info,
    description: desc
  })

    console.log(desc);



  const createTask = () => {
    axios.post('http://localhost:5000/tasks', task)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField id="filled-basic" label="Title" variant="filled" defaultValue={task.title} onChange={(event) => setTask({...task, title: event.target.value})}/> 
    <TaskStatus status={task.column} onChange={(event) => setTask({...task, column: event.target.value})}/>
      
      <Description desc={task.description} onChange={(event) => setTask({...task, description: event.target.value})}/>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={createTask}>Save</Button>
        </Stack>
    </Box>
  );
}
