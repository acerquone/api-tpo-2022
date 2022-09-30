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

const tipoclases = [
    {
      value: '1',
      label: 'Individual',
    },
    {
      value: '2',
      label: 'Grupal',
    },
  ]

  const materias = [
    {
      value: '1',
      label: 'Matemática',
    },
    {
      value: '2',
      label: 'Física',
    },
    {
      value: '3',
      label: 'Química',
    },
  ]





export function TextFieldBusqueda() {

  const [frecuencia, setFrecuencia] = React.useState('1');

  const handleChange3 = (event) => {
    setFrecuencia(event.target.value);
  };

  const [materia, setMateria] = React.useState('1');

  const handleChange1 = (event) => {
    setMateria(event.target.value);
  };

  const [tipoclase, setipoclase] = React.useState('1');

  const handleChange2 = (event) => {
    setipoclase(event.target.value);
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
          id="outlined-select-currency"
          select
          label="Materias"
          value={materia}
          onChange={handleChange1}
        >
          {materias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Tipo de clase"
          value={tipoclase}
          onChange={handleChange2}
        >
          {tipoclases.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Frecuencia"
          value={frecuencia}
          onChange={handleChange3}
        >
          {frecuencias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}