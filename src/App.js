
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// material-ui

import * as React from 'react';
import ThemeCustomization from './themes';
import ShowCard from './components/cards/showcard';
import { ThemeProvider, createTheme } from '@mui/system';
import { Grid,Box,Card,  CardContent,CardActions, Button, Typography,Stack,
  Chip } from '@mui/material';

function App() {
  return (

    <ThemeCustomization>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
        bgcolor: '#9EA09C',
        boxShadow: 1,
        mb: 2.25, p: 2
      }}>
          <Grid item xs={12} sx={{  p: 2 }}>
              <Typography variant="h5">Dashboard</Typography>
          </Grid>
          <Grid item xs={4}>
            <ShowCard title="Total User" count="103.2" percentage={20.01} color="primary"/>
          </Grid>
          <Grid item xs={4}>
            <ShowCard title="Total Order" count="93.3" percentage={18.77} color="primary"/>
          </Grid>
          <Grid item xs={4}>
            <ShowCard title="Total Sales" count="90.8" percentage={15.06} color="primary"/>
          </Grid>
      </Grid>
    </ThemeCustomization>

  );

}

export default App;
