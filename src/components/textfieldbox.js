import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldBox() {
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
            label="Correo" 
            variant="outlined" 
        />
        <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
        />
      </div>
    </Box>
  );
}