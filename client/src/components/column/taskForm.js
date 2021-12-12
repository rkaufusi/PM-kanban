import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Description from './description.js';
import { Button } from '@mui/material';
import SaveButton from './saveButton.js';
import TaskStatus from './taskStatus.js';
import {useState} from 'react'

export default function TaskForm({info, desc, status}) {
  const [task, setTask] = useState({
    column: status,
    project: 'React Project',
    title: info,
    description: desc
  })

  console.log(task.description)

    /*  const [taskList, setTaskList] = useState([
    {column: "To Do", project: "React Project", status: "To Do", title: "Task 1", description: "Plan out component flow"},
    {column: "To Do", project: "React Project", status: "To Do", title: "Task 2", description: "Draw app look and feel"},
    {column: "To Do", project: "React Project", status: "To Do", title: "Task 3", description: "intiitialize git repo"},
  ]); */

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField id="filled-basic" label="Title" variant="filled" defaultValue={info}/>
      <TaskStatus status={status}/>
      
      <Description desc={desc}/>
      <SaveButton/>
    </Box>
  );
}
