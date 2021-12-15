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

export default function TaskForm({info, desc, status, idVal}) {
  const [task, setTask] = useState({
    column: status,
    project: 'React Project',
    title: info,
    description: desc,
    taskId: idVal
  })

  console.log(task.description);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      console.log(`deleted ${idVal}`);
      window.location.reload(false);
    })
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
    ><TextField id="filled-basic" label="Title" variant="filled" defaultValue={task.title} onChange={(event) => setTask({...task, title: event.target.value})}/>
    <TaskStatus status={task.column} onChange={(event) => setTask({...task, column: event.target.value})}/>
      
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
      <SaveButton/>
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


