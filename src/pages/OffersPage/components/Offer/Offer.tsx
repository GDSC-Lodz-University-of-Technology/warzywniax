import { Box, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Button } from '../../../../components/Button/Button';
import { FC } from 'react';
import { IOfferProps } from './Offer.types';
import { LocationMark } from '../LocationMark/LocationMark';
import { OfferTags } from '../OfferTags/OfferTags';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export const Offer: FC<IOfferProps> = ({
  categories,
  name,
  location,
  photoUrl,
  quantityUnit,
  shopName,
  unitPrice,
}) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        borderRadius: '25% 8px 8px 25%',
        boxShadow: 'none',
        display: 'flex',
        filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15))',
        height: '208px',
        my: 2,
        overflow: 'visible',
        width: 1,
      }}
    >
      <CardMedia
        component='img'
        sx={{ alignSelf: 'center', borderRadius: '32px', height: '224px', width: '224px' }}
        image={photoUrl}
        alt={`${t('offers.photoAlt')} ${name}`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 224px)' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
            padding: 1.5,
            pb: 0,
          }}
        >
          <div>
            <Box sx={{ display: 'flex', height: '24px', justifyContent: 'space-between' }}>
              <OfferTags categories={categories} />
              <LocationMark location={location} />
            </Box>
            <Typography
              component='div'
              variant='h5'
              fontWeight='600'
              noWrap
            >
              {name}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              fontWeight='400'
              component='div'
              sx={{ overflowX: 'hidden' }}
            >
              {shopName}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: 'last baseline',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Typography
              fontWeight='600'
              color='text.secondary'
              component='div'
              sx={{ fontSize: '2.5rem', lineHeight: 0 }}
            >
              {unitPrice}
            </Typography>
            <Typography
              variant='h6'
              fontWeight='400'
              color='text.secondary'
              component='div'
            >
              {`${t('offers.currency')} /${quantityUnit}`}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button sx={{ height: '36px', width: 2 / 3 }}>{t('offers.details')}</Button>
        </CardActions>
      </Box>
    </Card>
  );
};
