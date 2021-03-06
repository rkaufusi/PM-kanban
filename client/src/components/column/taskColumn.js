import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskCard from './taskCard.js';
import {useState, useEffect} from 'react';
import CreateTask from '../createTask/createTask.js';
import TaskTable from '../table/table.js'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TaskColumn({tasksList}) {


  const valsMappedToDo = tasksList.map((value) => {
    if(value.column === 'To Do'){
      return (
        <>
          <Item>
            <TaskCard idVal={value._id} info={value.title} desc={value.description} status={value.column}/>
          </Item>   
      </>
      )
    }
  }) 
  const valsMappedDoing = tasksList.map((value) => {
    if(value.column === 'Doing'){
      return (
        <>
          <Item>
            <TaskCard idVal={value._id} info={value.title} desc={value.description} status={value.column}/>
          </Item>   
      </>
      )
    }
  }) 
  const valsMappedFinished = tasksList.map((value) => {
    if(value.column === 'Finished'){
      return (
        <>
          <Item>
            <TaskCard idVal={value._id} info={value.title} desc={value.description} status={value.column}/>
          </Item>   
      </>
      )
    }
  }) 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <h4>To Do</h4>
            {valsMappedToDo}
              <Item>
                <TaskCard info='New Task' status="To Do"/>
              </Item>
        </Grid>
        <Grid item xs={4}>
          <h4>Doing</h4>  
          {valsMappedDoing}
            <Item>
              <TaskCard info='New Task' status="Doing"/>
            </Item>  
        </Grid>
        <Grid item xs={4}>
          <h4>Finished</h4>
          {valsMappedFinished}
            <Item>
              <TaskCard info='New Task' status="Finished"/>
            </Item>  
        </Grid>
      </Grid>
    </Box>
  );
}