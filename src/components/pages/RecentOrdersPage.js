import OrderTable from '../../show-data/OrderTable';
import  MainCard from '../../components/cards/MainCard';
import { Grid, Typography } from '@mui/material';

function RecentOrdersPage() {
    return(
        <>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h5">Recent Orders</Typography>
                </Grid>
            <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <OrderTable />
            </MainCard>
        </>
    );
}

export default RecentOrdersPage;