import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../Styles/NavbarHome';
import NavbarLink from '../Styles/NavbarLink';
import usePostService from '../rest-client/post-cart';
import date from 'date-and-time';

const HistoryCart = () => {
  const { carts } = usePostService();

  useEffect(() => {
    carts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [carts]);

  console.log(carts);

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <NavbarLink />
        <div style={{ margin: 'auto' }}>
          <Typography marginTop={10}>
            <h1>Riwayat Pesanan</h1>
          </Typography>
          {carts && carts.length === 0 ? (
            <Typography marginTop={3}>Tidak ada pesanan yang sedang diproses.</Typography>
          ) : (
            <div>
              {carts &&
                carts.map((cart) => (
                  <div key={cart.id} style={{ marginLeft: '250px' }}>
                    <Card sx={{ marginBottom: '10px', width: '1150px', display: 'flex', alignItems: 'center', padding: '10px', marginLeft: 5 }}>
                      <CardContent style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Typography variant="h5" component="div" align="left">
                            {cart.name}
                          </Typography>
                          {/* <Typography variant="body1" color="text.secondary" align="left" style={{ marginTop: '5px' }}>
                            Product: {cart.name}
                          </Typography> */}
                          <Typography variant="body1" color="text.secondary" align="left" style={{ marginTop: '5px' }}>
                            Price: {cart.price}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body1" color="text.secondary" align="left" style={{ marginTop: '5px' }}>
                            Time: {cart.timestamp ? date.format(new Date(cart.timestamp), 'DD MMM YYYY HH:mm:ss') : 'Invalid Date'}
                          </Typography>
                        <Typography variant="body1" color="text.secondary" align="right" style={{ marginTop: '5px' }}>
                            Status: {cart.status}
                          </Typography>
                          </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          )}<Link to="/home">
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Kembali ke Home
          </Button>
        </Link>
        </div> 
      </div>
      
      <Grid marginBottom={79}></Grid>
    </div>
  );
};

export default HistoryCart;