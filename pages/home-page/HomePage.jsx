import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  Modal,
  Fade,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import useClient from '../rest-client/index';
import Navbar from '../Styles/NavbarHome';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartActions';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const client = useClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.produk.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('/tim4_product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [client]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handlePesanSekarang = () => {
    dispatch(addToCart(selectedProduct));
    navigate('/cart', { state: { product: selectedProduct } });
    setOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const carouselItems = [
    { imgSrc: require('../../components/product/1.jpg'), altText: 'Image 1' },
    { imgSrc: require('../../components/product/2.jpg'), altText: 'Image 2' },
    { imgSrc: require('../../components/product/3.jpg'), altText: 'Image 3' },
  ];

  return (
    <Box maxWidth="lg" margin="auto">
      <Navbar />
      <Box width="100%" display="flex" alignItems="center" justifyContent="center">
        <Box position="relative" maxWidth="1024px" width="1024px">
          <img
            src={carouselItems[activeIndex].imgSrc}
            alt={carouselItems[activeIndex].altText}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
          <Box
            position="absolute"
            bottom="10px"
            left="50%"
            transform="translateX(-50%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {carouselItems.map((_, index) => (
              <span
                key={index}
                style={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? 'white' : '#c4c4c4',
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </Box>
          <IconButton
            onClick={handlePrevious}
            style={{ position: 'absolute', left: '20px', top: '50%', color: 'black', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            style={{ position: 'absolute', right: '20px', top: '50%', color: 'black', transform: 'translateY(-50%)' }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      <Box width="100%" bgcolor="#eaeaec" padding="10px" mt={2} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <TextField
          label="Cari Produk Layanan"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
        />
      </Box>
      <Typography variant="h4" fontWeight="bold" mt={2} mb={1} sx={{ textAlign: 'center' }}>
        Layanan Kami
      </Typography>

      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '20px' }}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <img
                  src={require(`../../components/product/${item.image}`)}
                  alt={item.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', marginTop: '10px' }}
                />
                {item.harga && (
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Biaya Layanan: {item.harga}
                  </Typography>
                )}
              </CardContent>
              <Grid container justifyContent="center" sx={{ marginTop: 'auto' }}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOrder(item)}
                    sx={{ backgroundColor: '#fbbc05' }}
                  >
                    Lihat Detail
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="secondary" component={Link} to="/service1">
          Lihat Semuanya
        </Button>
      </Box>

      {/* Modal for product details */}
      <Modal
        open={open}
        onClose={handleModalClose}
      >
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
                <Typography variant="h6">{selectedProduct.name}</Typography>
                <img
                  src={require(`../../components/product/${selectedProduct.image}`)}
                  alt={selectedProduct.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: '10px' }}
                />
                <Typography variant="subtitle1" gutterBottom>
                  Biaya Layanan: {selectedProduct.harga}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Deskripsi: {selectedProduct.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePesanSekarang}
                  sx={{ mt: 2 }}
                >
                  Pesan Sekarang
                </Button>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomePage;