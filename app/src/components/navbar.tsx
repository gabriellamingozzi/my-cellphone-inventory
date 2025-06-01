import { useContext } from 'react';

import { Button, Box, Drawer, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';

const drawerWidth = 240;


const darkDrawerTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Navbar() {


    return (
        <ThemeProvider theme={darkDrawerTheme}>
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Typography m={2} variant='subtitle1'>My Cellphone Store</Typography>
                    <Divider />
                    <List>
                        <ListItem key={'Dashboard'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                            </ListItemButton>
                        </ListItem>
                          <ListItem key={'Files'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Files'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Inventory'} disablePadding>
                            <ListItemButton selected={true}>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Inventory'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Orders'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Orders'} />
                            </ListItemButton>
                        </ListItem>
                         <ListItem key={'Transactions'} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ReceiptIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Transactions'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                   
                    <Box component={Button} fullWidth sx={{position: "absolute", bottom: "0", color: 'white' }}>
                        <AccountCircleIcon />
                        <Typography sx={{marginLeft: 1}}>Account</Typography>
                    </Box>

                    
                </Drawer>
            </Box>
        </ThemeProvider>
    )

}