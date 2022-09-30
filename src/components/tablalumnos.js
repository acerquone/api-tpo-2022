import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Calculo', col2: 'Roberto', col3: 'Semanal', col4: '50', col5: '4.5' },
  { id: 2, col1: 'Quimica', col2: 'Pedro', col3: 'Semanal', col4: '50', col5: '4.5' },
  { id: 3, col1: 'Fisica', col2: 'Gabriela', col3: 'Semanal', col4: '50', col5: '4.5' },
];

const columns= [
  { field: 'col1', headerName: 'Materia', width: 150 },
  { field: 'col2', headerName: 'Profesor', width: 150 },
  { field: 'col3', headerName: 'Frecuencia', width: 150 },
  { field: 'col4', headerName: 'Costo', width: 150 },
  { field: 'col5', headerName: 'Calificación', width: 150 },
];

export default function TablaAlumnos() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}