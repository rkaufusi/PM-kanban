import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Popup from '../modal/popup.js';
import {useState, useEffect} from 'react';
import { Button } from '@mui/material';



export default function TaskTable({tasksList}) {
  const taskObject = {
    title: "",
    desc: ""
  }
  const [open, setOpen] = useState(false);

  const [passThroughVal, setPassThroughVal] = useState(taskObject);

  const handleOpen = (titleVal, descVal) => {
    setOpen(!open); 
    setPassThroughVal({title: titleVal, desc: descVal});
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="right">View Task</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tasksList.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpen(row.title, row.description)}><AddOutlinedIcon/>              
                {
                  open && <Popup onClick={handleOpen} openPopup={open} info={passThroughVal.title} desc={passThroughVal.desc}>
                  </Popup>
                }</Button>

              </TableCell>
              {console.log("test " + row.title)}

            </TableRow>
          ))}
          <TableRow>          
            <TableCell component="th" scope="row">
              New Task
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="right">
              <Button onClick={() => handleOpen('', '')}><AddOutlinedIcon/></Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    
    </TableContainer>
  );
}