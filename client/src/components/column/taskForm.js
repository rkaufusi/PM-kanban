import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Description from './description.js';
import { Button } from '@mui/material';
import SaveButton from './saveButton.js';
import TaskStatus from './taskStatus.js';
import {useState} from 'react';
import DeleteButton from './deleteButton.js';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import axios from 'axios';
//
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function TaskForm({info, desc, status, idVal}) {
  const [task, setTask] = useState({
    column: status,
    project: 'React Project',
    title: info,
    description: desc,
    taskId: idVal
  })

  // <TaskStatus status={task.column} onChange={(event) => setTask({...task, column: event.target.value})}/>

  const deleteTask = (id) => {
    console.log(`deleted ${idVal}`);
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      console.log(`deleted ${idVal}`);
      //window.location.reload(false);
    })
  }

  const updateTask = (id, col, desc, proj, title) => {
    try {
      console.log(`column for databse ${col}`)
      axios.put(`http://localhost:5000/tasks/${id}`, {column: col, project: proj, title: title, description: desc});
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="filled-basic" label="Title" variant="filled" defaultValue={task.title} onChange={(event) => setTask({...task, title: event.target.value})}/>
    
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
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
    <Grid item xs={4}>
      <SaveButton onClick={() => updateTask(task.taskId, task.column, task.description, task.project, task.title)}/>
    </Grid>
    <Grid item xs={4}>
      <DeleteButton onClick={() => deleteTask(task.taskId)}/>
    </Grid>
    </Grid>
    </Box>

    </Box>

    </>
  );
}


