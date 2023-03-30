import { Typography, useTheme } from '@mui/material';
import { LocationButton } from './LocationMark.styled';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const LocationMark = ({ location }: { location: string }) => {
  const theme = useTheme();

  return (
    <LocationButton>
      <LocationOnOutlinedIcon
        sx={{
          fontSize: 18,
          stroke: theme.palette.text.label,
          strokeWidth: 1,
        }}
      />
      <Typography sx={{ fontWeight: '600' }}>{location}</Typography>
    </LocationButton>
  );
};
