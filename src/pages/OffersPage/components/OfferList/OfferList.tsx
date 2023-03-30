import { Box, Button, LinearProgress, useTheme } from '@mui/material';
import { Collection } from '../../../../services/FirebaseService/FireBaseService.types';
import { getOffers } from '../../../../services/FirebaseService/OffersCollection/OffersCollectionService';
import Grid from '@mui/material/Unstable_Grid2';
import { Offer } from '../Offer/Offer';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const OfferList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isLoading, data: offers } = useQuery({
    queryFn: () => getOffers(),
    queryKey: [Collection.OFFERS],
  });

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: '#11eef0',
          display: 'flex',
          height: '400px',
          justifyContent: 'center',
          position: 'relative',
          width: 1,
        }}
      >
        <Button sx={{ width: '50%' }}>{t('offers.mapButton')}</Button>
        <Box
          sx={{
            background: 'no-repeat bottom url(../../offerPageWaves.svg)',
            bottom: 0,
            height: '15%',
            position: 'absolute',
            width: '100%',
          }}
        />
      </Box>
      <Box width={{ mobile: '95%', tablet: '90%' }}>
        <Grid
          container
          spacing={3}
          columns={{ desktop: 8, mobile: 4 }}
        >
          {offers?.docs.map((offerData) => (
            <Grid
              key={offerData.id}
              mobile={4}
            >
              <Offer data={offerData} />
            </Grid>
          ))}
        </Grid>
        {isLoading && (
          <Box sx={{ py: 3, width: '100%' }}>
            <LinearProgress
              sx={{
                '& .MuiLinearProgress-bar': {
                  backgroundColor: theme.palette.common.white,
                },
                backgroundColor: theme.palette.text.label,
              }}
            />
          </Box>
        )}
      </Box>
    </>
  );
};
