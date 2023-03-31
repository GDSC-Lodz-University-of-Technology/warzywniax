import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { NavBar } from 'templates/NavBar/NavBar';
import { UserSettingsPanel } from './components/UserSettingsPanel/UserSettingsPanel';
import { UserShopsPanel } from './components/UserShopsPanel/UserShopsPanel';

export function VendorDashboardPage() {
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
      <Box width={{ mobile: '95%', tablet: '90%' }}>
        <Grid
          container
          spacing={3}
        >
          <Grid mobile={12}>
            <UserSettingsPanel />
          </Grid>
          <Grid mobile={12}>
            <UserShopsPanel />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
