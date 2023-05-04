
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// material-ui

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/system';
import { Grid,Box,Card,  CardContent,CardActions, Button, Typography } from '@mui/material';


const theme = createTheme({
  palette: {
    background: {
      paper: '#09626F',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);


function App() {
  return (

    // <div>Hello</div>
    // <ThemeProvider theme={theme}>
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //     <Grid item xs={4}>
    //       <Box
    //         sx={{
    //           bgcolor: 'background.paper',
    //           boxShadow: 1,
    //           borderRadius: 2,
    //           p: 2,
    //           minWidth: 300,
    //         }}
    //       >
    //         <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
    //         <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
    //           98.3 K
    //         </Box>
    //         <Box
    //           sx={{
    //             color: 'success.dark',
    //             display: 'inline',
    //             fontWeight: 'bold',
    //             mx: 0.5,
    //             fontSize: 14,
    //           }}
    //         >
    //           +18.77%
    //         </Box>
    //         <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
    //           vs. last week
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={4}>
    //     <Box
    //         sx={{
    //           bgcolor: 'background.paper',
    //           boxShadow: 1,
    //           borderRadius: 2,
    //           p: 2,
    //           minWidth: 300,
    //         }}
    //       >
    //         <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
    //         <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
    //           98.3 K
    //         </Box>
    //         <Box
    //           sx={{
    //             color: 'success.dark',
    //             display: 'inline',
    //             fontWeight: 'bold',
    //             mx: 0.5,
    //             fontSize: 14,
    //           }}
    //         >
    //           +18.77%
    //         </Box>
    //         <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
    //           vs. last week
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Box
    //         sx={{
    //           bgcolor: 'background.paper',
    //           boxShadow: 1,
    //           borderRadius: 2,
    //           p: 2,
    //           minWidth: 300,
    //         }}
    //       >
    //         <Card><CardContent>g</CardContent></Card>
    //       </Box>
    //     </Grid>
    //   </Grid>

    // </ThemeProvider>
    <ThemeProvider>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
          >
            <Card variant="outlined">{card}</Card>
          </Box>

        </Grid>
      </Grid>

    </ThemeProvider>

  );

}

export default App;
