import logo from "../../images/logo.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../../styles/home.css"
import IconRegister from "../../images/icons/icon-register.png"

const navItems = ['Home', 'About us', 'Vadhu Var Melava', 'Success Stories', 'Contact Us', 'Register'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
            <CssBaseline />
            <AppBar component="nav" className="appbar-container appnav"
                sx={{ display: 'flex', justifyContent: "space-between" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                         <img src={logo} className="app-logo " id="logo1" />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} className="appbar nav-list">
                                {item}
                            </Button>
                        ))}
                        <Button key="icon-register" className="appbar nav-list"><img src={IconRegister}/></Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default DrawerAppBar;
