import "./header.css";

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 200;
const navItems = ['Home', 'About','Skills','Works','Contact'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2,fontWeight:'bold' }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item,index) => ( */}
          <ListItem key={1} disablePadding>
            <ListItemButton onClick={props.scrollToSection1} sx={{ textAlign: 'center' }}>
              <ListItemText>
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton onClick={props.scrollToSection2} sx={{ textAlign: 'center' }}>
              <ListItemText>
                About
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton onClick={props.scrollToSection3} sx={{ textAlign: 'center' }}>
              <ListItemText>
                Skills
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={4} disablePadding>
            <ListItemButton onClick={props.scrollToSection4} sx={{ textAlign: 'center' }}>
              <ListItemText>
                Projects
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={5} disablePadding>
            <ListItemButton onClick={props.scrollToSection5} sx={{ textAlign: 'center' }}>
              <ListItemText>
                Contact Us
              </ListItemText>
            </ListItemButton>
          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
    <Box sx={{ display: 'flex',backgroundColor:"#000000"}}>
      <CssBaseline />
      <AppBar className="header-MainDiv" component="nav">
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
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight:'bolder'}}
          >
            Portfolio.
          </Typography>
          <Box className="Navelements" sx={{ display: { xs: 'none', sm: 'block' }}}>
            
              <Button key={1} onClick={props.scrollToSection1} sx={{ color: '#fff' }}>
                Home
              </Button>
              <Button key={2} onClick={props.scrollToSection2} sx={{ color: '#fff' }}>
                About
              </Button>
              <Button key={3} onClick={props.scrollToSection3} sx={{ color: '#fff' }}>
                Skills
              </Button>
              <Button key={4} onClick={props.scrollToSection4} sx={{ color: '#fff' }}>
                Projects
              </Button>
              <Button key={5} onClick={props.scrollToSection5} sx={{ color: '#fff' }}>
                Contact US
              </Button>          
           
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>     
    </Box>
  
    </div>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
