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
import TaskStatus from '../column/taskStatus.js';

export default function TaskTable({tasksList}) {
  const taskObject = {
    title: "",
    desc: "",
    idVal: "",
    column: ""
  }
  const [testVal, setTestVal] = useState(tasksList);
  console.log(testVal);
  const [open, setOpen] = useState(false);
  const [passThroughVal, setPassThroughVal] = useState(taskObject);

  const handleOpen = (titleVal, descVal, idVal, column) => {
    if(titleVal !== 'New Task') {
      setPassThroughVal({title: titleVal, desc: descVal, idVal: idVal, column: column});
    } else {
      setPassThroughVal({title: '', desc: ''});
    }
    setOpen(!open);
  }

//() => handleOpen(row.title, row.description, row._id, row.column
  //const handleOpen = () => setOpen(!open);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Column</TableCell>
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
              <TableCell align="left">{row.description === '' || row.description.length < 45 ? row.description : row.description.substring(0, 45) + '...'}</TableCell>
              <TableCell align="left">{row.column}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpen(row.title, row.description, row._id, row.column)}><AddOutlinedIcon/> </Button>             
                {
                  open && <Popup onClick={handleOpen} openPopup={open} info={passThroughVal.title} desc={passThroughVal.desc} idVal={passThroughVal.idVal} status={passThroughVal.column}>
                  </Popup>
                }
              </TableCell>
              {console.log("test " + open)}
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