import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={{ background: '#2b63cf', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Tambahkan ikon logo di sini */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '16px' }}>
          ELECSOLUTIONS
        </Typography>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="kenapa-kami"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kenapa Kami
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="beragam-kategori"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kategori
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="kontak-kami"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kontak
          </Link>
        </Button>
        <Button
  color="inherit"
  sx={{ marginLeft: '8px' }}
  onClick={handleLoginClick}
>
  Login
</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;