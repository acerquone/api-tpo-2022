import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const frecuencias = [
  {
    value: '1',
    label: 'Única',
  },
  {
    value: '2',
    label: 'Semanal',
  },
  {
    value: '3',
    label: 'Mensual',
  },
]



export function TextFieldClases() {

  const [frecuencia, setFrecuencia] = React.useState('1');

  const handleChange = (event) => {
    setFrecuencia(event.target.value);
  };

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
          id="outlined-select-currency"
          select
          label="Frecuencia"
          value={frecuencia}
          onChange={handleChange}
        >
          {frecuencias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

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