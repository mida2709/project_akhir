import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import usePostService from './usePostService';
import Navbar from '../Styles/NavbarAdmin';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const { getData, deleteData } = usePostService();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData('/tim4_product');
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteData('/tim4_product', id);
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <h1>Selamat datang, Admin!</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Harga</TableCell>
              <TableCell>No. HP</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.phoneNumber}</TableCell>
                <TableCell>{product.address}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Link to="/AddProduct">
          <Button variant="contained" color="primary">Add Product</Button>
        </Link>
      </Box>
    </div>
  );
};

export default ViewProduct;
