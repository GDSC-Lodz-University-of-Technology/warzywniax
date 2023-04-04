import { Box, LinearProgress, Stack, Typography, useTheme } from '@mui/material';
import { Button } from 'components/Button/Button';
import { Collection } from 'services/FirebaseService/FireBaseService.types';
import { DashboardPanel } from '../DashboardPanel/DashboardPanel';
import { getShops } from 'services/FirebaseService/ShopsCollection/ShopsService';
import { Link } from 'react-router-dom';
import { ShopRecord } from 'services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { useQuery } from '@tanstack/react-query';
import { UserShopInfo } from '../UserShopInfo/UserShopInfo';
import { UserShopsPanelProps } from './UserShopsPanel.types';
import { useTranslation } from 'react-i18next';
import { where } from '@firebase/firestore';

function UserShops({ user }: UserShopsPanelProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isLoading, data: shops } = useQuery({
    queryFn: () => getShops(where<ShopRecord>('owner.shopOwnerId', '==', user.uid)),
    queryKey: [Collection.SHOPS],
  });

  if (isLoading) {
    return (
      <Box
        sx={{ py: 3, width: '100%' }}
        key='loading'
      >
        <LinearProgress
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.common.white,
            },
            backgroundColor: theme.palette.text.label,
          }}
        />
      </Box>
    );
  }

  return !shops || shops.empty ? (
    <Typography>{t('dashboard.shop.empty')}</Typography>
  ) : (
    <Stack spacing={3}>
      {shops.docs.map((shop) => (
        <UserShopInfo
          shop={shop}
          key={shop.id}
        />
      ))}
    </Stack>
  );
}

export function UserShopsPanel({ user }: UserShopsPanelProps) {
  const { t } = useTranslation();
  const headerButton = (
    <Button
      sx={{ mt: { md: 5, xs: 0 } }}
      variant='contained'
      component={Link}
      to={'/shops/new'}
    >
      {t('dashboard.shop.new.label')}
    </Button>
  );
  return (
    <DashboardPanel
      title={t('dashboard.shop.title')}
      header={t('dashboard.shop.header')}
      headerButton={headerButton}
      cards={<UserShops user={user} />}
    />
  );
}
