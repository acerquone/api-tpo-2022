import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { TextFieldClases } from '../components/textfieldclases';
import { Box,ButtonGroup,Button } from '@mui/material';


export function ClaseProf() {
    return (
    <>
        <main>
            <h2>Crear o modificar clase</h2>
            <p>Profesor</p>
            <Box>
                <TextFieldClases></TextFieldClases>
            </Box>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Aceptar</Button>
                <Button>Cancelar</Button>
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
            <Link to="/listaclasesprofe">Lista de clases</Link>
            </Box> 
      </nav>
    </>
  );
}