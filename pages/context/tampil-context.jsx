import { Card, CardContent, Typography, Button, Modal, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavbarLogin from '../Styles/NavbarLogin';

const RegisterRead = () => {
  const createdPost = useSelector((state) => state.regisForm.createdPost);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDaftarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleKonfirmasiClick = () => {
    setIsModalOpen(false);
    navigate('/register-success');
  };

  const handleKembaliClick = () => {
    navigate('/register');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavbarLogin />
      <div style={{ textAlign: 'center' }}>
        <Typography marginTop={10} align="center">
            <h1>Halaman Registrasi Teknisi</h1></Typography>
        <Card sx={{ width: 500, marginBottom: 10 }}>
          <CardContent>
            <Grid container spacing={2}>
              {createdPost && (
                <Grid item xs={12}>
                  <div>
                    <Typography variant="body1" align="left">Nama: {createdPost.nama}</Typography>
                    <Typography variant="body1" align="left">Nomor Hp: {createdPost.nomor}</Typography>
                    <Typography variant="body1" align="left">Email: {createdPost.email}</Typography>
                    <Typography variant="body1" align="left">Alamat: {createdPost.alamat}</Typography>
                    <Typography variant="body1" align="left">Tempat Lahir: {createdPost.tempatLahir}</Typography>
                    <Typography variant="body1" align="left">Tanggal Lahir: {createdPost.tanggalLahir}</Typography>
                    <Typography variant="body1" align="left">Jenis Kelamin: {createdPost.jenisKelamin}</Typography>
                    <Typography variant="body1" align="left">Keahlian: {createdPost.keahlian}</Typography>
                  </div>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button onClick={handleKembaliClick} variant="outlined" color='error'>
                  Kembali
                </Button>
                <Button onClick={handleDaftarClick} variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                  Daftar
                </Button>
              </Grid>
            </Grid>
            <Modal open={isModalOpen} onClose={handleModalClose}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Apakah data sudah benar?
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Data yang diinput tidak bisa diubah kembali setelah dikonfirmasi.
                </Typography>
                <Button onClick={handleKonfirmasiClick} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                  Konfirmasi
                </Button>
                <Button onClick={handleModalClose} variant="outlined" color="error">
                  Batal
                </Button>
              </div>
            </Modal>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterRead;