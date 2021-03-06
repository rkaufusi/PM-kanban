import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {React, useState} from 'react'
import TaskForm from '../column/taskForm.js';
import TaskFormNew from '../column/taskFormNew.js';


const Popup = ({openPopup, onClick, info, desc, status, idVal}) => {
console.log(`popup ${openPopup}` + onClick)
    return (
        <Dialog onClose={onClick} open={openPopup}>
        {info !== 'New Task' ? <TaskForm idVal={idVal} info={info} desc={desc} status={status}/> : <TaskFormNew info='' desc='' status={status}/>}
            
        </Dialog>
    )
}

export default Popup

