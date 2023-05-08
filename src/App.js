
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// material-ui

import * as React from 'react';
import { useEffect, useState } from 'react';
import ThemeCustomization from './themes';
import  ShowCard from './components/cards/ShowCard';
import  MainCard from './components/cards/MainCard';
import OrderTable from './components/pages/OrderTable'
import ReportAreaChart from './components/pages/ReportAreaChart';
import SalesColumnChart from './components/pages/SalesColumnChart';

import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Grid, Button, Typography,Stack,
        List, ListItemButton,ListItemText, 
        MenuItem, TextField, Avatar,AvatarGroup,
        ListItemAvatar, ListItemSecondaryAction } from '@mui/material';

import avatar1 from './assets/images/users/avatar-1.png';
import avatar2 from './assets/images/users/avatar-2.png';
import avatar3 from './assets/images/users/avatar-3.png';
import avatar4 from './assets/images/users/avatar-4.png';
  // sales report status
const status = [
  {
      value: 'today',
      label: 'Today'
  },
  {
      value: 'month',
      label: 'This Month'
  },
  {
      value: 'year',
      label: 'This Year'
  }
];
// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};


function App() {
  const [value, setValue] = useState('today');
//   const [slot, setSlot] = useState('week');

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

          <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Sales Report</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            select
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                        >
                            {status.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 1.75 }}>
                    <Stack spacing={1.5} sx={{ mb: -12 }}>
                        <Typography variant="h6" color="secondary">
                            Net Profit
                        </Typography>
                        <Typography variant="h4">$1560</Typography>
                    </Stack>
                    <SalesColumnChart />
                </MainCard>
           </Grid>
           <Grid item xs={12} md={5} lg={4}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h5">Transaction History</Typography>
                </Grid>
                <Grid item />
                </Grid>
                  <MainCard sx={{ mt: 2 }} content={false}>
                    <List
                        component="nav"
                        sx={{
                            px: 0,
                            py: 0,
                            '& .MuiListItemButton-root': {
                                py: 1.5,
                                '& .MuiAvatar-root': avatarSX,
                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                            }
                        }}
                      >
                        <ListItemButton divider>
                          <ListItemAvatar>
                              <Avatar
                                  sx={{
                                      color: 'success.main',
                                      bgcolor: 'success.lighter'
                                  }}
                              >
                                  <GiftOutlined />
                              </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
                          <ListItemSecondaryAction>
                              <Stack alignItems="flex-end">
                                  <Typography variant="subtitle1" noWrap>
                                      + $1,430
                                  </Typography>
                                  <Typography variant="h6" color="secondary" noWrap>
                                      78%
                                  </Typography>
                              </Stack>
                          </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MessageOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'error.main',
                                        bgcolor: 'error.lighter'
                                    }}
                                >
                                    <SettingOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $682
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        16%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>

                    </List>
                  </MainCard>
                  <MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Help & Support Chat
                                    </Typography>
                                    <Typography variant="caption" color="secondary" noWrap>
                                        Typical replay within 5 min
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                    <Avatar alt="Remy Sharp" src={avatar1} />
                                    <Avatar alt="Travis Howard" src={avatar2} />
                                    <Avatar alt="Cindy Baker" src={avatar3} />
                                    <Avatar alt="Agnes Walker" src={avatar4} />
                                </AvatarGroup>
                            </Grid>
                        </Grid>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            Need Help?
                        </Button>
                    </Stack>
                </MainCard>
            </Grid>            

      </Grid>
    </ThemeCustomization>

  );

}

export default App;
