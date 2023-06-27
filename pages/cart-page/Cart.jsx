import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../../store/CartActions';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import Navbar from '../Styles/NavbarHome';
import NavbarLink from '../Styles/NavbarLink';
import usePostService from '../rest-client/post-cart';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createCart, loading } = usePostService();

  const cart = useSelector((state) => state.produk.cart);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = async () => {
    if (cart.length > 1) {
      alert('Maaf, hanya satu pesanan yang diperbolehkan dalam satu waktu.');
      return;
    }
    const orders = cart.map((item) => ({
      id: item._id,
      name: item.name,
      price: item.harga,
    }));

    try {
      for (const order of orders) {
        await createCart(order.name, order.price);
        dispatch(addToCart(order));
      }

      dispatch(clearCart());
      navigate('/cart-success', { state: { orders } });
    } catch (error) {
      console.error('Failed to place orders:', error);
    }
  };
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <NavbarLink />
        <div style={{ margin: 'auto' }}>
          <Typography marginTop={10}>
            <h1>Keranjang Pesanan</h1>
          </Typography>
          {cart.length === 0 ? (
            <div>
              <img
                src="/images/cart.jpg"
                alt="Cart"
                style={{ marginTop: '20px', width: '380px', borderRadius: '50%' }}
              />
              <Typography marginTop={3}>
                Yahhh.. Keranjang Kamu masih kosong nih.. <br />
                yuk segera buat pesananmu sekarang!
              </Typography>
              <Button component={Link} to="/service1" variant="contained" sx={{ marginTop: '20px' }}>
                Mulai Berbelanja
              </Button>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item._id} style={{ marginLeft: '250px' }}>
                  <Card sx={{ marginBottom: '10px', width: '1150px', display: 'flex', alignItems: 'center', padding: '10px', marginLeft: 5 }}>
                    <div>
                      <img src={require(`../../components/product/${item.image}`)} style={{ width: 100 }} alt="Product" />
                    </div>
                    <CardContent style={{ flexGrow: 1, marginLeft: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="h5" component="div" align='left'>
                          {item.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="left" style={{ marginTop: '5px' }}>
                          Price: {item.harga}
                        </Typography>
                      </div>
                      <Button onClick={() => handleRemove(item._id)} variant="outlined" sx={{ marginTop: '10px' }}>
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
              <Button onClick={handleClearCart} variant="outlined">
                Clear Cart
              </Button>
              <Button onClick={handlePlaceOrder} variant="contained" sx={{ marginLeft: '10px' }}>
                Pesan Sekarang
              </Button>
            </div>
          )}
        </div>
      </div>
      <Grid marginBottom={79}></Grid>
    </div>
  );
};

export default Cart;
