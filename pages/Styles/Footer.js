import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Container sx={{ textAlign: 'center', py: 4, bgcolor: '#f5f5f5' }} maxWidth="xl">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" sx={{ my: 1, marginLeft:5 }}>
            ELECSOLUTIONS
          </Typography>
        </Grid>
        <Grid item xs={12}  sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, marginRight: 5 }}>
            Elecsolutions
            <br /><br/>
            +1 897 6335 827
            <br />
            Jln. Jenderal Gatot Subroto Jakarta 10270
            <br />
            Gedung Nusantara III
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Elecsolutions
      </Typography>
    </Container>
  );
};

export default Footer;