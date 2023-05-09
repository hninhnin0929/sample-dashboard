import ReportAreaChart from '../../show-data/ReportAreaChart';
import  MainCard from '../cards/MainCard';
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Grid, Button, Typography,Stack,
        List, ListItemButton,ListItemText, 
        MenuItem, TextField, Avatar,AvatarGroup,
        ListItemAvatar, ListItemSecondaryAction } from '@mui/material';

function AnalyticsReportPage() {
    return(
        <>
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
        </>
    );
}

export default AnalyticsReportPage;