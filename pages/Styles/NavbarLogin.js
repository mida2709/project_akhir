import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NavbarLogin = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ background: '#2b63cf', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '16px' }}>
          ELECSOLUTIONS
        </Typography>
        <div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLogin;