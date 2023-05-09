import  MainCard from '../cards/MainCard';
import { Grid, Typography } from '@mui/material';
import HelpAndSupportPage from './HelpAndSupportPage';
import TransactionHistoryData from '../../show-data/TransactionHistoryData';

function TransHistoryAndSupportPage(){
    return(
        <>
          <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
              <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
          </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <TransactionHistoryData/>
            </MainCard>
            <MainCard sx={{ mt: 2 }}>
                <HelpAndSupportPage/>
          </MainCard>
        </>
    );
}

export default TransHistoryAndSupportPage;