import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../Styles/NavbarHome';
import { Typography } from '@mui/material';

const CartSuccess = () => {
  return (
    <div>
      <Navbar/>
      <Typography marginTop={10}>
      <h2>Pesanan Berhasil Ditempatkan</h2>
      </Typography>
      <p>Pesanan Anda telah berhasil ditempatkan. Mohon tunggu teknisi tiba di lokasi Anda.</p>
      <img src="../../images/cart-success.jpg" alt="Success" style={{ width: '400px', marginTop: '50px', borderRadius: '50%' }} />
      <div>
      <Button component={Link} to="/service1" variant="contained" style={{ marginTop: '50px', marginBottom: '50px' }}>Lanjutkan Belanja</Button>
      </div>
    </div>
  );
};

export default CartSuccess;