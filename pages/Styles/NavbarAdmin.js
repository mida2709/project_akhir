import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu} from '@mui/material';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ELECSOLUTIONS</Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          color="inherit"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        </Menu>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="logout"
          onClick={handleLogout}
        >
          <Typography variant="body1">Logout</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;