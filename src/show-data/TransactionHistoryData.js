import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Typography,
        Stack,
        List, 
        ListItemButton,
        ListItemText, 
        Avatar,
        ListItemAvatar, 
        ListItemSecondaryAction } 
from '@mui/material';

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

function TransactionHistoryData(){
    return(
        <>
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
        </>
    );
}

export default TransactionHistoryData;