import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Button } from '@mui/material';
import { TextFieldBox } from '../components/textfieldbox';

export function Login(){
    return (
        <main>
            <TextFieldBox></TextFieldBox>
            <Button variant="contained">
                <Link to="/about">Ingresar</Link>
            </Button>
        </main>
    );
}