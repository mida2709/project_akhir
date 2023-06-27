import { Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from "../Styles/NavbarLogin";

const RegisterSuccess = () => {

  const images = '../../images/regis-success.jpg'
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <Card>
      <CardContent>
        <NavbarLogin/>
      <Typography marginTop={10}>
      <h1>Pendaftaran Berhasil!</h1>
      </Typography>
        <Typography>Pendaftaran Anda telah berhasil.</Typography>
        <Typography>Terima kasih telah mendaftar.</Typography>

        

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <img
            src={images}
            alt="Registration Success"
            style={{ width: '500px', height: '350px', borderRadius: '50%' }}/>
        </div>
        <Button onClick={handleHomeClick} variant="contained" color="primary" style={{marginBottom: 50, marginTop: 50}}>
          Kembali ke Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default RegisterSuccess;