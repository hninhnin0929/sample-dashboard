import {  MessageOutlined } from '@ant-design/icons';
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

let items = [
    { orderCode: "002434", orderTime: "Today, 2:00 AM", price: 1430, percent: 78 },
    { orderCode: "984947", orderTime: "5 August, 1:45 PM", price: 302, percent: 78 },
    { orderCode: "988784", orderTime: "7 hours ago", price: 682, percent: 78 }];

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
                {/* <ListItemButton divider>
                    <ListItem color='primary.main' bgcolor='primary.lighter' orderCode="002434" orderTime="Today, 2:00 AM" price={1430} percent={78}/>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItem color='primary.main' bgcolor='primary.lighter' orderCode="984947" orderTime="5 August, 1:45 PM" price={302} percent={8}/>                    
                </ListItemButton>
                <ListItemButton>
                    <ListItem color='error.main' bgcolor='error.lighter' orderCode="988784" orderTime="7 hours ago" price={682} percent={16}/>                    
                </ListItemButton> */}

                {

                  items.map((item,index)=>
                    index === (items.length-1) ?   // this is not real condition, just testing
                    <ListItemButton>
                        <ListItem 
                        color='error.main' bgcolor='error.lighter' orderCode={item.orderCode} orderTime={item.orderTime} price={item.price} percent={item.percent}>        
                        </ListItem>
                    </ListItemButton>
                    :
                    <ListItemButton>
                        <ListItem 
                            color='primary.main' bgcolor='primary.lighter' orderCode={item.orderCode} orderTime={item.orderTime} price={item.price} percent={item.percent}>        
                        </ListItem>
                    </ListItemButton>

                    )
                }
            </List>
        </>
    );

    function ListItem(props){
        return(
            <>
                <ListItemAvatar>
                    <Avatar
                        sx={{
                            color: props.color,
                            bgcolor: props.bgcolor
                        }}
                    >
                        <MessageOutlined />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography variant="subtitle1">Order #{props.orderCode}</Typography>}
                    secondary={props.orderTime}
                />
                <ListItemSecondaryAction>
                    <Stack alignItems="flex-end">
                        <Typography variant="subtitle1" noWrap>
                            + ${props.price}
                        </Typography>
                        <Typography variant="h6" color="secondary" noWrap>
                            {props.percent}%
                        </Typography>
                    </Stack>
                </ListItemSecondaryAction>
            </>
        );
    }
}

export default TransactionHistoryData;