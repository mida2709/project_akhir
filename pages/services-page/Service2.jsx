import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, Modal, Box } from '@mui/material';
import useClient from '../rest-client/index';
import Navbar from '../Styles/NavbarHome';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartActions';
import NavbarLink from '../Styles/NavbarLink';
import { useNavigate } from 'react-router-dom';

const Service2 = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const client = useClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.produk.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('tim4_product2');
        setData(response.data);
      } catch (error) {
        console.error('Tidak bisa memuat data!', error);
      }
    };

    fetchData();
  }, [client]);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleOrder = (product) => {
    dispatch(addToCart(product));
    setSelectedProduct(product);
    setModalOpen(false);
    navigate('/cart');
  };

  return (
    <div>
      <Navbar />
      <NavbarLink />
      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '100px' }}>
        <Grid item xs={9} sx={{ marginLeft: 'auto' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
            Peralatan Rumah Tangga / Semua Produk
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

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedProduct && (
            <>
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
                Deskripsi: {selectedProduct.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleOrder(selectedProduct)}
                sx={{ backgroundColor: '#fbbc05', color: 'white', marginTop: '10px' }}
              >
                Pesan Layanan
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Service2;