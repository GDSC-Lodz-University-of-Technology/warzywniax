import { Typography, useTheme } from '@mui/material';
import { LocationButton } from './LocationMark.styled';
import { LocationMarkProps } from './Location.types';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// TODO(GH-35): location geo-point should be translated into city name
export const LocationMark = ({ geoPoint }: LocationMarkProps) => {
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
      <Typography sx={{ fontWeight: '600' }}>{geoPoint.latitude.toFixed(3)}</Typography>
    </LocationButton>
  );
};
