import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FC } from 'react';
import { IOfferProps } from './Offer.types';
import { OfferTags } from '../OfferTags/OfferTags';
import Typography from '@mui/material/Typography';

const LocationMark = ({ location }: { location: string }) => <Box sx={{}}>{location}</Box>;

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
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 1 }}
    >
      <CardContent sx={{ pb: 0, px: 1.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 0.5 }}>
          <OfferTags categories={categories} />
          <LocationMark location={location} />
        </Box>
        <Typography
          component='div'
          variant='h5'
        >
          {name}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
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
            fontWeight='semibold'
            color='text.secondary'
            component='div'
          >
            {unitPrice}
          </Typography>
          <Typography
            variant='h6'
            fontWeight='regular'
            color='text.secondary'
            component='div'
          >
            {`zł/${quantityUnit}`}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button
          sx={{
            background: 'linear-gradient(91.81deg, #3E8914 0%, #81B214 100%)',
            borderRadius: 2.5,
            color: 'white',
            fontWeight: 'bold',
            width: 2 / 3,
          }}
        >
          Details
        </Button>
      </CardActions>
    </Box>
  </Card>
);
