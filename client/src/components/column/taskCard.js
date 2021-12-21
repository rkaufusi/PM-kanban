import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from 'react';
import Icons from './icons.js';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Popup from '../modal/popup.js';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TaskCard({idVal, info, desc, status}) {
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

  if(!desc) desc = '';
  console.log(desc);
  return (
      <>
      <Card sx={{ minWidth: 100, bgcolor: "#CFE2F3" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {info}
          </Typography>
        <Typography variant="body2">{desc === '' || desc.length < 45 ? desc : desc.substring(0, 45) + '...'}</Typography> 

        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}><AddOutlinedIcon/></Button>
        </CardActions>
          {open && <Popup onClick={handleOpen} openPopup={open} info={info} desc={desc} status={status} idVal={idVal}/>}
    </Card>
    </>
  );
}