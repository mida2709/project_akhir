import React from 'react';
import { Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Instagram, Phone } from '@mui/icons-material';
import { connect } from 'react-redux';
import { updateContactInfo } from '../../store/actions';

const StyledCardWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '70%',
  margin: '0 auto',
});

const StyledContactCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '16px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#2b63cf',
  borderRadius: '10px',
  width: '60%',
});

const StyledIcon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  marginRight: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
  },
});

const Contact = ({ contactInfo, updateContactInfo }) => {
  const { email, instagram, phone } = contactInfo;

  const handleGmailClick = () => {
    window.location.href = email;
  };

  const handleInstagramClick = () => {
    window.open(instagram, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div>
      <Typography variant="h4" component="div" fontWeight="bold" align="center" marginTop={20} id="kontak-kami">
        Kontak Kami
      </Typography>
      <Typography variant="body1" align="center" marginTop={5}>
        Punya pertanyaan? Silahkan hubungi kami disini!
      </Typography>

      <StyledCardWrapper>
        <StyledContactCard style={{ marginTop: 50, marginBottom: 200 }}>
          <div data-testid="gmail-button" onClick={handleGmailClick}>
            <StyledIcon>
              <Email fontSize="large" style={{ color: '#fff' }} />
            </StyledIcon>
          </div>
          <div data-testid="instagram-button" onClick={handleInstagramClick}>
            <StyledIcon>
              <Instagram fontSize="large" style={{ color: '#fff' }} />
            </StyledIcon>
          </div>
          <div data-testid="phone-button" onClick={handlePhoneClick}>
            <StyledIcon>
              <Phone fontSize="large" style={{ color: '#fff' }} />
            </StyledIcon>
          </div>
        </StyledContactCard>
      </StyledCardWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactInfo: state.contact,
});

const mapDispatchToProps = {
  updateContactInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);