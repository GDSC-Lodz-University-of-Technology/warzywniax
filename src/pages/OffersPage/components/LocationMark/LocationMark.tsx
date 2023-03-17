import { styled, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const LocationButton = styled('button')(() => ({
  '&:hover': {
    background: 'none',
    filter: 'brightness(95%)',
  },
  alignItems: 'flex-start',
  background: 'none',
  border: 'none',
  color: '#C8C8C9',
  cursor: 'pointer',
  display: 'flex',
  padding: 0,
  textTransform: 'none',
}));

export const LocationMark = ({ location }: { location: string }) => (
  <LocationButton>
    <LocationOnOutlinedIcon
      sx={{
        fontSize: 18,
        stroke: '#C8C8C9',
        strokeWidth: 1,
      }}
    />
    <Typography sx={{ fontWeight: '600' }}>{location}</Typography>
  </LocationButton>
);
