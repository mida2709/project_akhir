import React, { useState } from 'react';
import { Typography, TextField, Button, Box, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../Styles/NavbarHome';
import usePostService from './usePostService';

const AddProduct = () => {
  const { createData } = usePostService();

  const [productName, setProductName] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [productPhone, setProductPhone] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productTechnician, setProductTechnician] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductAddressChange = (event) => {
    setProductAddress(event.target.value);
  };

  const handleProductPhoneChange = (event) => {
    setProductPhone(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductTechnicianChange = (event) => {
    setProductTechnician(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newProduct = {
        nama: productName,
        harga: productPrice,
        alamat: productAddress,
        teknisi: productTechnician,
        'No. Hp': productPhone,
      };

      await createData('/tim4_product', newProduct);

      // Reset form fields
      setProductName('');
      setProductAddress('');
      setProductPhone('');
      setProductPrice('');
      setProductTechnician('');
      setProductCategory('');
    } catch (error) {
      console.error(error);
      // Handle error, display error message to user, etc.
    }
  };

  return (
    <>
      <Navbar />
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Nama"
          value={productName}
          onChange={handleProductNameChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Alamat"
          value={productAddress}
          onChange={handleProductAddressChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="No.hp"
          value={productPhone}
          onChange={handleProductPhoneChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Harga"
          value={productPrice}
          onChange={handleProductPriceChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Teknisi"
          value={productTechnician}
          onChange={handleProductTechnicianChange}
          fullWidth
          margin="normal"
        />
        <TextField
          select
          label="Product Category"
          value={productCategory}
          onChange={handleProductCategoryChange}
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="household">Alat Rumah Tangga</MenuItem>
          <MenuItem value="water-electric">Air dan Listrik</MenuItem>
          <MenuItem value="office-equipment">Peralatan Kantor</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>
    </>
  );
};

export default AddProduct;
