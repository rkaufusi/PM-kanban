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
import {useState} from 'react';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TaskTable({tasksList}) {
  const [open, setOpen] = useState(false);
  const handleOpen = (arr) => {
    setOpen(!open); 
    setPassThrough(arr);
  }
  const [passThrough, setPassThrough] = useState([]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="left">Description</TableCell>
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
              <TableCell align="right">
                <Button onClick={() => handleOpen([row.title, row.description])} ><AddOutlinedIcon/>              
                {
                  open && <Popup onClick={handleOpen} openPopup={open} passThrough={passThrough} info={passThrough[0]} desc={passThrough[1]}>
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
            <TableCell align="right">
              <Button onClick={handleOpen}><AddOutlinedIcon/></Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    
    </TableContainer>
  );
}