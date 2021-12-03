import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskCard from './taskCard.js'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TaskColumn({tasksList}) {
  console.log(tasksList)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
        <Item>
        {tasksList.map((value) => {
            console.log(value.title);
          
            <TaskCard taskInfo={value.title}/>
         
        })}
        </Item>
        </Grid>
        <Grid item xs={4}>
        <h4>Doing</h4>
          <Item><TaskCard /></Item>
        </Grid>
        <Grid item xs={4}>
        <h4>Finished</h4>
        <Item><TaskCard /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}