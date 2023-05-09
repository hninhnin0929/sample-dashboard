import  MainCard from '../cards/MainCard';
import SalesColumnChart from '../../show-data/SalesColumnChart';
import { useState } from 'react';
import { Grid, 
        Typography,
        Stack,        
        MenuItem,        
        TextField } 
from '@mui/material';

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

function SalesReportPage(){

    const [value, setValue] = useState('today');
    //   const [slot, setSlot] = useState('week');

    return(
        <>
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
        </>
    );
}

export default SalesReportPage;