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
//
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';



export default function TaskFormNew({info, desc, status}) {
  const [task, setTask] = useState({
    column: status,
    project: 'React Project',
    title: info,
    description: desc
  })

    console.log(task.column, task.project, task.title, task.description);
// <TaskStatus status={task.column} onChange={(event) => setTask({...task, column: event.target.value})}/>


  const createTask = () => {
    axios.post('http://localhost:5000/tasks', task);
    window.location.reload(false);
  }

/* <Description desc={task.description} onChange={(event) => setTask({...task, description: event.target.value})}/>*/

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField id="filled-basic" label="Title" variant="filled" defaultValue={task.title} onChange={(event) => setTask({...task, title: event.target.value})}/> 
         
    <div>
    <FormControl variant="filled" sx={{ m: .1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-filled-label">{task.column}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        status={task.column}
        onChange={(event) => setTask({...task, column: event.target.value})}
      >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
        <MenuItem value='To Do'>To Do</MenuItem>
        <MenuItem value='Doing'>Doing</MenuItem>
        <MenuItem value='Done'>Done</MenuItem>
      </Select>
    </FormControl>
  </div>
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
 
      <div>
        <TextField
          fullWidth
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={8}
          variant="filled"
          defaultValue={task.description}
          onChange={(event) => setTask({...task, description: event.target.value})}
        />
      </div>
      
    </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={createTask}>Save</Button>
        </Stack>
    </Box>
  );
}
