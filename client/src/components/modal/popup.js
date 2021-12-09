import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {React, useState} from 'react'
import TaskForm from '../column/taskForm.js';


const Popup = ({openPopup, onClick, info, desc}) => {
    console.log(openPopup);
    //const [edit, setEdit] = useState(false);
    //const changeEdit = setEdit(!edit);
    //const [column, project, progress, title, description, open, setOpen] = props;
    return (

        <Dialog onClose={onClick} open={openPopup}>
            <TaskForm info={info} desc={desc}/>
        </Dialog>

  
    )
}

export default Popup

