import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { IOfferProps } from './Offer.types';
import { LocationMark } from '../LocationMark/LocationMark';
import { OfferTags } from '../OfferTags/OfferTags';
import Typography from '@mui/material/Typography';

const StyledButton = styled(Button)<ButtonProps>(() => ({
  '&:hover': {
    background: 'linear-gradient(91.81deg, #3E8914 0%, #81B214 100%)',
    filter: 'brightness(105%)',
  },
  background: 'linear-gradient(91.81deg, #3E8914 0%, #81B214 100%)',
  borderRadius: '0.75rem',
  color: 'white',
  fontWeight: '700',
  width: '60%',
}));

export const Offer: FC<IOfferProps> = ({
  categories,
  name,
  location,
  photoUrl,
  quantityUnit,
  shopName,
  unitPrice,
}) => (
  <Card
    sx={{
      borderRadius: '25% 0.5rem 0.5rem 25%',
      boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      height: '13rem',
      my: 2,
      overflow: 'visible',
      width: 1,
    }}
  >
    <CardMedia
      component='img'
      sx={{ alignSelf: 'center', borderRadius: '2rem', height: '14rem', width: '14rem' }}
      image={photoUrl}
      alt={`Photo of ${name}`}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 1 }}>
      <CardContent sx={{ pt: 1.5, px: 1.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <OfferTags categories={categories} />
          <LocationMark location={location} />
        </Box>
        <Typography
          component='div'
          variant='h5'
          fontWeight='600'
        >
          {name}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          fontWeight='400'
          component='div'
        >
          {shopName}
        </Typography>
        <Box
          sx={{
            alignItems: 'last baseline',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            variant='h4'
            fontWeight='600'
            color='text.secondary'
            component='div'
          >
            {unitPrice}
          </Typography>
          <Typography
            variant='h6'
            fontWeight='400'
            color='text.secondary'
            component='div'
          >
            {`zł/${quantityUnit}`}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <StyledButton>Details</StyledButton>
      </CardActions>
    </Box>
  </Card>
);
