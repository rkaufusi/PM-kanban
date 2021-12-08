import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'

const Popup = ({openPopup, setOpenPopup}) => {
    console.log(openPopup);
    //const [column, project, progress, title, description, open, setOpen] = props;
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                Title
            </DialogTitle>
            <DialogContent>
                Description
            </DialogContent>
        </Dialog>
    )
}

export default Popup
