import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography, Card } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/system';
// project import
// import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const theme = createTheme({
    palette: {
      background: {
        paper: '#EFF8E2',
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

const ShowCard = ({ color, title, count, percentage}) => (
    // <Card contentSX={{ p: 2.25 }}>
    //     <Stack spacing={0.5}>
    //         <Typography variant="h6" color="textSecondary">
    //             {title}
    //         </Typography>
    //         <Grid container alignItems="center">
    //             <Grid item>
    //                 <Typography variant="h4" color="inherit">
    //                     {count}
    //                 </Typography>
    //             </Grid>
    //             {percentage && (
    //                 <Grid item>
    //                     <Chip
    //                         variant="combined"
    //                         color={color}
    //                         icon={
    //                             <>
    //                                 {/* {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
    //                                 {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />} */}
    //                             </>
    //                         }
    //                         label={`${percentage}%`}
    //                         sx={{ ml: 1.25, pl: 1 }}
    //                         size="small"
    //                     />
    //                 </Grid>
    //             )}
    //         </Grid>
    //     </Stack>
    //     <Box sx={{ pt: 2.25 }}>
    //         <Typography variant="caption" color="textSecondary">
    //             You made an extra{' '}
    //             <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
    //                 {/* {extra} */}
    //             </Typography>{' '}
    //             this year
    //         </Typography>
    //     </Box>
    // </Card>
    <ThemeProvider theme={theme}>
        <Box
            sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            }}
        >
            <Box sx={{ color: 'text.secondary' }}>{title}</Box>
            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
            {count} K
            </Box>
            <Box
            sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
            }}
            >
            +{percentage}%
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
            vs. last week
            </Box>
        </Box>
  </ThemeProvider>
);

ShowCard.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
};

ShowCard.defaultProps = {
    color: 'primary'
};

export default ShowCard;
