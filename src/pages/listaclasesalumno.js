import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import TablaAlumnos from '../components/tablalumnos';
import { Box } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';
import { TextFieldBusqueda } from '../components/textfieldbusqueda';

export function ListaClasesAlumno() {
    return (
    <>
        <main>
            <h2>Lista de clases</h2>
            <p>Alumno</p>
            <TextFieldBusqueda></TextFieldBusqueda>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Buscar</Button>
            </ButtonGroup>
            <TablaAlumnos></TablaAlumnos>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Ver detalles</Button>
            </ButtonGroup>
        </main>
        <nav>
            <Box
            sx={{
            typography: 'body1',
            '& > :not(style) + :not(style)': {
            ml: 2,
            },
            }}
            >
            <Link to="/">Home</Link>
            </Box> 
      </nav>
    </>
  );
}