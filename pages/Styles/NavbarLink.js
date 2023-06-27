import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const NavbarLink = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '280px',
        height: '1210px',
        left: '0px',
        top: '80px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        marginLeft: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'left' }}>
        Jenis Layanan
      </Typography>
      <Link
        to="/service1"
        className="navbar-link"
        style={{
            textAlign: 'left',
          marginBottom: '30px',
          color: 'Black',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          padding: '5px',
          width: '90%',
        }}
      >
        Air dan Listrik
      </Link>
      <Link
        to="/service2"
        className="navbar-link"
        style={{
            textAlign: 'left',
          marginBottom: '30px',
          color: 'Black',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          padding: '5px',
          width: '90%',
        }}
      >
        Peralatan Rumah Tangga
      </Link>
      <Link
        to="/service3"
        className="navbar-link"
        style={{
            textAlign: 'left',
          marginBottom: '70px',
          color: 'Black',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          padding: '5px',
          width: '90%',
        }}
      >
        Peralatan Kantor
      </Link>

      <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'left' }}>
        Pesanan
      </Typography>
      <Link
        to="/cart"
        className="navbar-link"
        style={{
            textAlign: 'left',
          marginBottom: '30px',
          color: 'Black',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          padding: '5px',
          width: '90%',
        }}
      >
        Keranjang Pesanan
      </Link>
      <Link
        to="/history-cart"
        className="navbar-link"
        style={{
            textAlign: 'left',
          marginBottom: '30px',
          color: 'Black',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          padding: '5px',
          width: '90%',
        }}
      >
        Riwayat Pesanan
      </Link>
    </Box>
  );
};

export default NavbarLink;