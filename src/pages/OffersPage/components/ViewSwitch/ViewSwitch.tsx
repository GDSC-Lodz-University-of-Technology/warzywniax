import { FC, MouseEvent } from 'react';
import { IViewSwitchProps, OffersPageView } from './ViewSwitch.types';
import { Paper, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
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

export const ViewSwitch: FC<IViewSwitchProps> = ({ view, setView }) => {
  const { t } = useTranslation();

  const handleView = (_event: MouseEvent<HTMLElement>, newView: OffersPageView) => {
    setView(newView);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 10,
        bottom: '0.75rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        position: 'fixed',
        zIndex: 1,
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
          value={OffersPageView.List}
          aria-label='list view'
        >
          <FormatListBulletedOutlinedIcon />
          {t('offers.list')}
        </ToggleButton>
        <ToggleButton
          sx={{ height: '2.5rem', width: '7rem' }}
          value={OffersPageView.Map}
          aria-label='map view'
        >
          <MapOutlinedIcon />
          <Typography component='span'>{t('offers.map')}</Typography>
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  );
};
