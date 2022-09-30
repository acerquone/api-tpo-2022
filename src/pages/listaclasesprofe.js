import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import TablaProfesor from '../components/tablaprofesor';
import { Box } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';

export function ListaClasesProfe() {
    return (
    <>
        <main>
            <h2>Lista de clases</h2>
            <p>Profesor</p>
            <TablaProfesor></TablaProfesor>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button href="/claseprof">Crear</Button>
                <Button>Modificar</Button>
                <Button>Publicar</Button>
                <Button>Eliminar</Button>
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