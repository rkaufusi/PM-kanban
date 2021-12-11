import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Description from './description.js';
import { Button } from '@mui/material';
import SaveButton from './saveButton.js';
import TaskStatus from './taskStatus.js';

export default function TaskForm({info, desc, status}) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >{info !== 'Create New Task' ? <TextField id="filled-basic" label="Title" variant="filled" defaultValue={info}/> : <TextField id="filled-basic" label="Title" variant="filled" />}
      <TaskStatus status={status}/>
      
      <Description desc={desc}/>
      <SaveButton/>
    </Box>
  );
}
