import { Box, Button, Paper, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { MouseEvent } from 'react';
import { OfferList } from './components/OfferList/OfferList';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    '&.Mui-disabled': {
      border: 1,
    },
    '&:first-of-type': {
      borderRadius: 20,
    },
    '&:not(:first-of-type)': {
      borderRadius: 20,
    },
    border: 0,
    margin: theme.spacing(0.6),
  },
}));

export function OffersPage() {
  const [view, setView] = useState('map');
  const { t } = useTranslation();

  //newView: string | null
  const handleView = (_event: MouseEvent<HTMLElement>, newView: string) => {
    if (handleView !== null) {
      setView(newView);
    }
  };

  return (
    <main>
      <Box
        component='section'
        sx={{
          alignItems: 'center',
          backgroundColor: '#F7F8F9',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>{t('offers.title')}</h1>
        {/* <Nav></Nav> */}
        {/* miejsce na mape */}
        <Box
          component='div'
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
          <Button sx={{ width: '50%' }}>Click for more</Button>
          <Box
            component='div'
            sx={{
              background: 'no-repeat bottom url(../../public/offerPageWaves.svg)',
              bottom: 0,
              height: '15%',
              position: 'absolute',
              width: '100%',
            }}
          />
        </Box>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 10,
            display: 'flex',
            flexWrap: 'wrap',
            mb: 2,
          }}
        >
          <StyledToggleButtonGroup
            value={view}
            exclusive
            onChange={handleView}
            aria-label='view'
          >
            <ToggleButton
              sx={{ height: '2.5rem', width: '7rem' }}
              value='list'
              aria-label='list view'
            >
              <FormatListBulletedOutlinedIcon />
              {t(' ­ List')}
            </ToggleButton>
            <ToggleButton
              sx={{ height: '2.5rem', width: '7rem' }}
              value='map'
              aria-label='map view'
            >
              <MapOutlinedIcon />
              {t(' ­ Map')}
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
        <Box
          component='div'
          width={{ mobile: '95%', tablet: '80%' }}
        >
          <OfferList />
        </Box>
      </Box>
    </main>
  );
}
