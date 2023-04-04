import { Box } from '@mui/material';
import { getAuthUser } from 'services/FirebaseService/AuthService/AuthService';
import { NavBar } from 'templates/NavBar/NavBar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { UserShopsPanel } from './components/UserShopsPanel/UserShopsPanel';

export function VendorDashboardPage() {
  const navigate = useNavigate();
  const user = getAuthUser();

  // TODO: This is a temporary solution. We should have a proper auth guard
  if (!user) {
    navigate('/login');
    return null;
  }

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
      {user && (
        <Box width={{ mobile: '95%', tablet: '90%' }}>
          <Stack>
            <UserShopsPanel user={user} />
          </Stack>
        </Box>
      )}
    </Box>
  );
}
