import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Box } from '@mui/material';

export function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>Primera pagina</p>
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
              <Link to="/login">Login</Link>
              <Link to="/about">About</Link>
            </Box> 
        </nav>
      </>
    );
  }