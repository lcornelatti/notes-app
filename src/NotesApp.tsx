import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { SavedNotes } from './SavedNotes';
import { CurrentNote } from './CurrentNote';

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom> Leo's Notes App </Typography>
        <Typography variant="h4" gutterBottom> New Note </Typography>
        <CurrentNote />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom> Saved Notes </Typography>
        <SavedNotes />
      </Box>
    </Container>
  );
}
