import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, Button, Modal, Box, Fade } from '@mui/material';
import useClient from '../rest-client/index';
import Navbar from '../Styles/NavbarHome';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartActions';
import NavbarLink from '../Styles/NavbarLink';

const Service1 = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const client = useClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.produk.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('tim4_product1');
        setData(response.data);
      } catch (error) {
        console.error('Tidak bisa memuat data!', error);
      }
    };

    fetchData();
  }, [client]);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleOrder = (product) => {
    dispatch(addToCart(product));
    setSelectedProduct(product);
    setOpen(false);
    navigate('/cart');
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Navbar />
      <NavbarLink />
      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '100px' }}>
        <Grid item xs={9} sx={{ marginLeft: 'auto' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
            Air dan Listrik / Semua Produk
          </Typography>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <img src={require(`../../components/product/${item.image}`)} alt={item.name} style={{ width: '100%', height: '300px', marginTop: '10px' }} />
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Biaya Layanan: {item.harga}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleModalOpen(item)}
                      sx={{
                        marginTop: '10px',
                        backgroundColor: '#fbbc05',
                        color: 'white',
                        fontSize: '12px',
                        height: '100%',
                      }}
                    >
                      Pesan Layanan
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid marginBottom={20}></Grid>

      <Modal open={open} onClose={handleModalClose}>
        <Fade in={open}>
          <Box
            maxWidth={400}
            bgcolor="white"
            boxShadow={5}
            p={2}
            mx="auto"
            mt={10}
            borderRadius={4}
            textAlign="center"
          >
            {selectedProduct && (
              <div>
                <Typography variant="h6" component="div">
                  {selectedProduct.name}
                </Typography>
                <img
                  src={require(`../../components/product/${selectedProduct.image}`)}
                  alt={selectedProduct.name}
                  style={{ width: '100%', height: '300px', marginTop: '10px' }}
                />
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Biaya Layanan: {selectedProduct.harga}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Deskkripsi: {selectedProduct.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleOrder(selectedProduct)}
                  sx={{ backgroundColor: '#fbbc05', color: 'white', marginTop: '10px' }}
                >
                  Pesan Layanan
                </Button>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Service1;