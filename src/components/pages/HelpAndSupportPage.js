import { Grid, 
        Button, 
        Typography, 
        Stack,        
        Avatar,
        AvatarGroup, } 
    from '@mui/material';

import avatar1 from '../../assets/images/users/avatar-1.png';
import avatar2 from '../../assets/images/users/avatar-2.png';
import avatar3 from '../../assets/images/users/avatar-3.png';
import avatar4 from '../../assets/images/users/avatar-4.png';

function HelpAndSupportPage(){
    return(
        <>
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
        </>
    );
}

export default HelpAndSupportPage;