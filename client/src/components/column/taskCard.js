import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect} from 'react';
import Icons from './icons.js';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TaskCard({info, desc}) {
    console.log("info " + info);

  return (
      <>
    <Card sx={{ minWidth: 100 }}>
        <CardContent>
       <Typography variant="h5" component="div">
         {info}
       </Typography>
       <Typography variant="body2">
         {desc}
       </Typography>
       </CardContent>

      <CardActions>
        <Button><AddOutlinedIcon/></Button>
      </CardActions>
    </Card>
    </>
  );
}