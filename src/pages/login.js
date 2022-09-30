import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Button } from '@mui/material';
import { TextFieldBox } from '../components/textfieldbox';

export function Login(){
    return (
        <main>
            <h2>Inicio de Sesión</h2>
            <p>Primera pagina</p>
            <TextFieldBox></TextFieldBox>
            <Button variant="contained" href="/listaclasesprofe">Ingresar</Button>
        </main>
    );
}