import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskCard from './taskCard.js';
import {useState} from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
//<TaskCard taskInfo={value.title}/>
/*        {tasksList.map((value) => {
            console.log(value.title);
          <Item>{value.title}</Item>
            
         
        })}*/
export default function TaskColumn({tasksList}) {
  tasksList.map((value) => {
    console.log(value.title + ": " + value.description);
  })
  const [taskListOne, setTaskListOne] = useState([
    {column: "To Do", project: "React Project", title: "Task 1", description: "Plan out component flow"},
    {column: "To Do", project: "React Project", title: "Task 2", description: "Draw app look and feel"},
    {column: "To Do", project: "React Project", title: "Task 3", description: "intiitialize git repo"},
  ]);
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <h4>To Do</h4>
          {taskListOne.map((value) => {
            console.log(value.title + ": " + value.description);
            return (
              <>
                <Grid item xs={12}>
                  <Item>
                    <TaskCard info={value.title} desc={value.description}/>
                  </Item>
                </Grid>
            </>
            )

          })}

          
        </Grid>
        <Grid item xs={4}>
        <h4>Doing</h4>
          <Item>Task 3</Item>
        </Grid>
        <Grid item xs={4}>
        <h4>Finished</h4>
        <Item>Task 4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}