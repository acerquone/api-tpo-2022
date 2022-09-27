import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Box } from '@mui/material';

export function About() {
    return (
      <>
        <main>
          <h2>Descripción</h2>
          <p>
            Descripción de la aplicación
          </p>
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
              <Link to="/login">Login</Link>
            </Box>
        </nav>
      </>
    );
  }