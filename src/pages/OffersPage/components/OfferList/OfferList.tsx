import { Box, Button, LinearProgress, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { IOfferProps } from '../Offer/Offer.types';
import { Offer } from '../Offer/Offer';
import { useTranslation } from 'react-i18next';

const datalist: IOfferProps[] = [
  {
    categories: [
      'warzywa',
      'owoce',
      'przetwory',
      'mrożonki',
      'pieczywo',
      'nabiał',
      'mięso',
      'ryby',
      'słodycze',
      'napoje',
      'przyprawy',
      'chemia',
      'kosmetyki',
      'higiena',
      'inne',
    ],
    location: 'Łódź',
    name: 'Ogórasy Pierwszej Klasy',
    photoUrl: 'https://zasoby.ekologia.pl/artykulyNew/20982/xxl/shutterstock-497270422_800x600.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 21.37,
  },
  {
    categories: ['warzywa'],
    location: 'Łódź',
    name: 'McMarchew',
    photoUrl: 'https://s3.przepisy.pl/przepisy3ii/img/variants/1280x0/marchewka253216.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 11.11,
  },
  {
    categories: ['warzywa'],
    location: 'Łódź',
    name: 'Pomidorki z Twojej Norki',
    photoUrl:
      'https://cdn.galleries.smcloud.net/t/galleries/gf-PUUd-X5Zi-aupv_pomidory-34-1280x960.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 13.37,
  },
  {
    categories: ['przetwory'],
    location: 'Łódź',
    name: 'Przetwory',
    photoUrl: 'https://www.wedrowkipokuchni.com.pl/wp-content/uploads/2016/07/ggg.jpg',
    quantityUnit: 'szt',
    shopName: 'straganik',
    unitPrice: 22.22,
  },
  {
    categories: ['warzywa', 'owoce'],
    location: 'Łódź',
    name: 'Ogórasy Pierwszej Klasy',
    photoUrl: 'https://zasoby.ekologia.pl/artykulyNew/20982/xxl/shutterstock-497270422_800x600.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 21.37,
  },
  {
    categories: ['warzywa'],
    location: 'Łódź',
    name: 'McMarchew',
    photoUrl: 'https://s3.przepisy.pl/przepisy3ii/img/variants/1280x0/marchewka253216.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 11.11,
  },
  {
    categories: ['warzywa'],
    location: 'Łódź',
    name: 'Pomidorki z Twojej Norki',
    photoUrl:
      'https://cdn.galleries.smcloud.net/t/galleries/gf-PUUd-X5Zi-aupv_pomidory-34-1280x960.jpg',
    quantityUnit: 'kg',
    shopName: 'straganik',
    unitPrice: 13.37,
  },
];

export const OfferList = () => {
  const [data, setData] = useState<IOfferProps[]>(datalist);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    const response = datalist;
    setData((prevData) => [...prevData, ...response]);
    setIsLoading(false);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
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
          {data.map(
            (
              { categories, location, name, photoUrl, quantityUnit, shopName, unitPrice },
              index
            ) => (
              <Grid
                key={index}
                mobile={4}
              >
                <Offer
                  name={name}
                  photoUrl={photoUrl}
                  shopName={shopName}
                  unitPrice={unitPrice}
                  quantityUnit={quantityUnit}
                  location={location}
                  categories={categories}
                />
              </Grid>
            )
          )}
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
