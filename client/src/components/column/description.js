import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Description({desc}) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
 
      <div>
        <TextField
          fullWidth
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={8}
          variant="filled"
          defaultValue={desc}
        />
      </div>
      
    </Box>
  );
}