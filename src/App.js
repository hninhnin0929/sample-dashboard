
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
import  ShowCard from './components/cards/ShowCard';
import  MainCard from './components/cards/MainCard';
import OrderTable from './components/pages/OrderTable'
import ReportAreaChart from './components/pages/ReportAreaChart'
import { ThemeProvider, createTheme } from '@mui/system';
import { Grid,Box,Card,  CardContent,CardActions, Button, Typography,Stack,
  Chip, List, ListItemButton,ListItemText, MenuItem } from '@mui/material';

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

          <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                      {/* row 3 */}
          <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h5">Recent Orders</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <OrderTable />
            </MainCard>
          </Grid>
          
          <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                  <Typography variant="h5">Analytics Report</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                <ListItemButton divider>
                  <ListItemText primary="Company Finance Growth" />
                  <Typography variant="h5">+45.14%</Typography>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItemText primary="Company Expenses Ratio" />
                    <Typography variant="h5">0.58%</Typography>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Business Risk Cases" />
                    <Typography variant="h5">Low</Typography>
                </ListItemButton>
              </List>
              <ReportAreaChart />
            </MainCard>
          </Grid>
      </Grid>
    </ThemeCustomization>

  );

}

export default App;
