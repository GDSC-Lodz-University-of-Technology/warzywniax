import {
  Box,
  Button,
  Paper,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { OfferList } from './components/OfferList/OfferList';
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
    textTransform: 'none',
  },
}));

export function OffersPage() {
  const [view, setView] = useState('list');
  const { t } = useTranslation();

  //newView: string | null
  const handleView = (_event: MouseEvent<HTMLElement>, newView: string) => {
    if (handleView !== null) {
      setView(newView);
    }
  };

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
      <h1>{t('offers.title')}</h1>
      {/* <Nav></Nav> */}
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
        <Button sx={{ width: '50%' }}>Click for more</Button>
        <Box
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
            <Typography component='span'>{t(' ­ Map')}</Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      <Box width={{ mobile: '95%', tablet: '85%' }}>{view === 'list' && <OfferList />}</Box>
    </Box>
  );
}
