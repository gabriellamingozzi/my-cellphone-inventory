import { useContext } from 'react';

import { Box, Drawer, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';

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
                        <ListItem key={'Inventory'} disablePadding>
                            <ListItemButton selected={true}>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Inventory'} />
                            </ListItemButton>
                        </ListItem>

                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    )

}