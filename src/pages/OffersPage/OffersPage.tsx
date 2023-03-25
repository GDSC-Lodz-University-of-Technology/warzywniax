import { Box } from '@mui/material';
import { NavBar } from 'templates/NavBar/NavBar';
import { OfferList } from './components/OfferList/OfferList';
import { OfferMap } from './components/OfferMap/OfferMap';
import { OffersPageView } from './components//ViewSwitch/ViewSwitch.types';
import { useState } from 'react';
import { ViewSwitch } from './components/ViewSwitch/ViewSwitch';

//import { useTranslation } from 'react-i18next';

export const views = {
  [OffersPageView.List]: <OfferList />,
  [OffersPageView.Map]: <OfferMap />,
};

export function OffersPage() {
  const [view, setView] = useState(OffersPageView.List);
  //const { t } = useTranslation();

  return (
    <Box
      component='main'
      sx={{
        alignItems: 'center',
        backgroundColor: '#F7F8F9',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '101vh',
      }}
    >
      <NavBar />
      <ViewSwitch
        view={view}
        setView={setView}
      />
      {views[view]}
    </Box>
  );
}
