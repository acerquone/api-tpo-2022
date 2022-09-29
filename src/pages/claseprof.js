import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { TextFieldClases } from '../components/textfieldclases';
import { Box } from '@mui/material';


export function ClaseProf() {
    return (
    <>
        <main>
            <Box>
                <TextFieldClases></TextFieldClases>
            </Box>
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