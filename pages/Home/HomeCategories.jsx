import { Typography } from '@mui/material';
import { StyledCardWrapper, StyledImage } from '../Styles/StyledComponents';

const HomeCategories = () => {
  return (
    <div>
      <Typography variant="h4" component="div" fontWeight="bold" align="center" marginTop={20} id="beragam-kategori">
        Beragam Kategori
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
        <StyledCardWrapper>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <StyledImage src="../../images/cat-water.jpg" alt="Card 4" style={{ maxWidth: '300px', marginLeft: '100px' }} />
            <div style={{ marginTop: '16px' }}>
              <Typography variant="h6" align="center" fontWeight="bold" marginLeft={'100px'}>
                Air dan Listrik
              </Typography>
              <Typography variant="body1" align="center" marginLeft="100px" marginTop={'15px'}>
                Kami menyediakan layanan perbaikan<br/> dan instalasi untuk masalah terkait<br/> air dan listrik di rumah Anda.
              </Typography>
            </div>
          </div>
        </StyledCardWrapper>

        <StyledCardWrapper>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: '50px' }}>
            <StyledImage src="../../images/cat-home.jpg" alt="Card 5" style={{ maxWidth: '300px' }} />
            <div style={{ marginTop: '16px' }}>
              <Typography variant="h6" align="center" fontWeight="bold">
                Service Alat Rumah Tangga
              </Typography>
              <Typography variant="body1" align="center" marginTop={'15px'}>
                Kami dapat memperbaiki berbagai alat <br/>rumah tangga, seperti mesin cuci, kulkas,<br/> oven, dan lainnya.
              </Typography>
            </div>
          </div>
        </StyledCardWrapper>

        <StyledCardWrapper>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginRight: '100px' }}>
            <StyledImage src="../../images/cat-office.jpg" alt="Card 6" style={{ maxWidth: '300px' }} />
            <div style={{ marginTop: '16px' }}>
              <Typography variant="h6" align="center" fontWeight="bold">
                Service Peralatan Kantor
              </Typography>
              <Typography variant="body1" align="center" marginRight="40px"  marginTop={'15px'}>
                Jika Anda memiliki peralatan kantor yang<br/> rusak, seperti printer, komputer, atau jaringan,<br/> kami siap membantu.
              </Typography>
            </div>
          </div>
        </StyledCardWrapper>
      </div>
    </div>
  );
};

export default HomeCategories;