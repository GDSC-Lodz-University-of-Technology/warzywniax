import { FC, MouseEvent } from 'react';
import { IViewSwitchProps, OffersPageView } from './ViewSwitch.types';
import { Paper, ToggleButton, Typography } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { StyledToggleButtonGroup } from './ViewSwitch.styled';
import { useTranslation } from 'react-i18next';

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
        bottom: '10px',
        boxShadow: 'none',
        filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15))',
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
          sx={{ height: '40px', width: '120px' }}
          value={OffersPageView.List}
          aria-label='list view'
        >
          <FormatListBulletedOutlinedIcon />
          {t('offers.list')}
        </ToggleButton>
        <ToggleButton
          sx={{ height: '40px', width: '120px' }}
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
