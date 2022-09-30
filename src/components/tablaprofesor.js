import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Integrales', col2: 'Calculo', col3: '5', col4: 'Semanal', col5: '5', col6: 'Aceptada' },
  { id: 2, col1: 'Carbono', col2: 'Química', col3: '3', col4: 'Única', col5: '7', col6: 'Publicada' },
  { id: 3, col1: 'Derivadas', col2: 'Calculo', col3: '2', col4: 'Semanal', col5: '14', col6: 'Finalizada' },
];

const columns= [
  { field: 'col1', headerName: 'Nombre', width: 150 },
  { field: 'col2', headerName: 'Materia', width: 150 },
  { field: 'col3', headerName: 'Duración', width: 150 },
  { field: 'col4', headerName: 'Frecuencia', width: 150 },
  { field: 'col5', headerName: 'Costo', width: 150 },
  { field: 'col6', headerName: 'Estado', width: 150 },
];

export default function TablaProfesor() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}