import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import TablaProfesor from '../components/tablaprofesor';
import { Box } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';

export function ListaClasesProfe() {
    return (
    <>
        <main>
            <TablaProfesor></TablaProfesor>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button><Link to="/claseprof">Crear</Link></Button>
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