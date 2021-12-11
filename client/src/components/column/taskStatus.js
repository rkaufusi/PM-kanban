import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TaskStatus({status}) {
  const [age, setAge] = React.useState('');
    console.log(status);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: .1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{status}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>To Do</MenuItem>
          <MenuItem value={20}>Doing</MenuItem>
          <MenuItem value={30}>Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}