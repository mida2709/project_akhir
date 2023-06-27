import {  Typography } from '@mui/material';
import { StyledCardWrapper, StyledImage } from '../Styles/StyledComponents';

const HomeApp = () => {
  return (
    <div>
  <Typography variant="h4" component="div" fontWeight="bold" align="center" marginTop={'30px'} id="kenapa-kami">
    Kenapa Harus Kami?
  </Typography>
      <StyledCardWrapper>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }}>
          <StyledImage src="../../images/2.png" alt="Card 1" style={{ maxWidth: '400px' }} />
          <div style={{ marginLeft: '16px' }}>
            <Typography variant="h5" align="left" fontWeight="bold" marginTop="16px" marginLeft={'30px'}>
              Pelayanan yang Cepat oleh Tim Profesional
            </Typography>
            <Typography variant="body1" align="left" marginLeft={'30px'}>
              Tidak perlu ragu dengan kemampuan teknisi kami. Layanan kami dilakukan oleh teknisi profesional yang telah<br/> kami training.
            </Typography>
          </div>
        </div>
      </StyledCardWrapper>

      <StyledCardWrapper>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 70 }}>
          <div div style={{ marginRight: '16px' }}>
          <Typography variant="h5" align="left" fontWeight="bold" marginTop="16px" marginLeft={'100px'}>
              Customer Service 24 Jam!
            </Typography>
            <Typography variant="body1" align="left" marginLeft={'100px'}>
              Ada keluhan, pertanyaan, kendala atau yang lainnya? customer service kami siap melayanimu 24 jam!
            </Typography>
          </div>
          <div style={{ marginLeft: 16}}>
            <StyledImage src="../../images/4.png" alt="Card 2" style={{ maxWidth: '400px' }} />
          </div>
          </div>
      </StyledCardWrapper>

      <StyledCardWrapper>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }}>
          <StyledImage src="../../images/1.png" alt="Card 3" style={{ maxWidth: '400px' }} />
          <div style={{ marginLeft: '16px' }}>
            <Typography variant="h5" align="left" fontWeight="bold" marginTop="16px" marginLeft={'30px'}>
              Pemesanan yang Mudah dan Cepat
            </Typography>
            <Typography variant="body1" align="left" marginLeft={'30px'}>
              Cukup lakukan pemesanan lewat website, teknisi kami akan segera menuju ke rumahmu!
            </Typography>
          </div>
        </div>
      </StyledCardWrapper>

      <StyledCardWrapper>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 70 }}>
          <div div style={{ marginRight: '16px' }}>
          <Typography variant="h5" align="left" fontWeight="bold" marginTop="16px" marginLeft={'100px'}>
          Perbaiki apa saja, Bisa!
            </Typography>
            <Typography variant="body1" align="left" marginLeft={'100px'}>
              Pipa air bocor? AC rusak? tv tidak menyala? Kami bisa perbaiki semuanya! Sangat efisien!
            </Typography>
          </div>
          <div style={{ marginLeft: 80}}>
            <StyledImage src="../../images/3.png" alt="Card 2" style={{ maxWidth: '400px' }} />
          </div>
          </div>
      </StyledCardWrapper>
    </div>
  );
};

export default HomeApp;