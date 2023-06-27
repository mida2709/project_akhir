import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircleRounded } from '@mui/icons-material';
import { logout } from '../../store/actions';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceAnchorEl, setServiceAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServiceMenuOpen = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceMenuClose = () => {
    setServiceAnchorEl(null);
  };

  const handleService1Click = () => {
    navigate('/service1');
  };

  const handleService2Click = () => {
    navigate('/service2');
  };

  const handleService3Click = () => {
    navigate('/service3');
  };

  const handleOrderHistoryClick = () => {
    navigate('/history-cart');
  };

  const handleTechnicianListClick = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2b63cf' }}>
      <Toolbar>
        <Typography variant="h6" color="white" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none' }}>
          ELECSOLUTIONS
        </Typography>
        <div>
          <Typography variant="h7" color="white" onClick={handleServiceMenuOpen} sx={{ cursor: 'pointer', textDecoration: 'none', marginRight: '20px' }}>
            Layanan
          </Typography>
          <Menu
            anchorEl={serviceAnchorEl}
            open={Boolean(serviceAnchorEl)}
            onClose={handleServiceMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleService1Click}>Air dan Listrik</MenuItem>
            <MenuItem onClick={handleService2Click}>Peralatan Rumah Tangga</MenuItem>
            <MenuItem onClick={handleService3Click}>Peralatan Kantor</MenuItem>
          </Menu>
        </div>
        <Link to="/cart" className="navbar-link" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Buat Pesanan
        </Link>
        <div>
          <AccountCircleRounded sx={{ color: 'white', cursor: 'pointer' }} onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleOrderHistoryClick}>Riwayat Pesanan</MenuItem>
            <MenuItem onClick={handleTechnicianListClick}>Daftar Teknisi</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;