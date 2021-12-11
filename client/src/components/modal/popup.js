import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {React, useState} from 'react'
import TaskForm from '../column/taskForm.js';


const Popup = ({openPopup, onClick, info, desc, status}) => {

    return (
        <Dialog onClose={onClick} open={openPopup}>
            <TaskForm info={info !== 'New Task' ? info : ''} desc={desc} status={status}/>
        </Dialog>
    )
}

export default Popup

