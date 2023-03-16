import Grid from '@mui/material/Unstable_Grid2';
import { IOfferProps } from '../Offer/Offer.types';
import { Offer } from '../Offer/Offer';
import { useEffect } from 'react';

const data: IOfferProps[] = [
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
  // const handleScroll = () => {};

  useEffect(() => {
    // addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Grid
      container
      spacing={3}
      columns={{ desktop: 8, mobile: 4 }}
    >
      {data.map(
        ({ categories, location, name, photoUrl, quantityUnit, shopName, unitPrice }, index) => (
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
  );
};
