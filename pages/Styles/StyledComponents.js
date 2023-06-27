import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';

export const StyledCardWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '32px',
});

export const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  transition: 'opacity 0.5s ease',
});