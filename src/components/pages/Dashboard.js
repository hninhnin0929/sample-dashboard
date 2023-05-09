import * as React from 'react';
import ThemeCustomization from '../../themes';
import  ShowCard from '../cards/ShowCard';
import { Grid, Typography } from '@mui/material';
import RecentOrdersPage from './RecentOrdersPage';
import AnalyticsReportPage from './AnalyticsReportPage';
import SalesReportPage from './SalesReportPage';
import TransHistoryAndSupportPage from './TransHistoryAndSupportPage';

function Dashboard() {

  return (

    <ThemeCustomization>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
        bgcolor: '#9EA09C',
        boxShadow: 1,
        mb: 2.25, p: 2
      }}>
            {/* row 1 */}
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

            {/* row 2 */}
          <Grid item xs={12} md={7} lg={8}>
                <RecentOrdersPage/>
          </Grid>
            {/* row 2 */}
          <Grid item xs={12} md={5} lg={4}>
                <AnalyticsReportPage/>
          </Grid>
            {/* row 3 */}
          <Grid item xs={12} md={7} lg={8}>
                <SalesReportPage/>
           </Grid>
                {/* row 3 */}
           <Grid item xs={12} md={5} lg={4}>
                <TransHistoryAndSupportPage/>
            </Grid>            

      </Grid>
    </ThemeCustomization>

  );

}

export default Dashboard;
