import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldClases() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
            id="outlined-basic" 
            label="Nombre" 
            variant="outlined" 
        />
        <TextField 
            id="outlined-basic" 
            label="Materia" 
            variant="outlined" 
        />
        <TextField 
            id="outlined-basic" 
            label="Duración"
            type="time" 
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}  
        />
        <TextField 
            id="outlined-basic" 
            label="Frecuencia"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}  
        />
        <TextField 
            id="outlined-basic" 
            label="Costo"
            type="number"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }} 
        />
      </div>
    </Box>
  );
}