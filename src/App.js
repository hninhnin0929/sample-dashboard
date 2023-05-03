
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// material-ui
import {
  Grid,
  Typography,
  Card,
  CardHeader
} from '@mui/material';


function App() {
  return (

    // <div>Hello</div>
    <Grid container rowSpacing={0} columnSpacing={0}>
      <Grid item >
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item >
        {/* <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" /> */}
        <Card>
          <CardHeader titleTypographyProps={{ variant: 'subtitle1' }}  title={<Typography>{"Total Page Views"}</Typography>}  />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          {/* <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" /> */}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          {/* <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" /> */}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
          {/* <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" /> */}
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
  );
}

export default App;
