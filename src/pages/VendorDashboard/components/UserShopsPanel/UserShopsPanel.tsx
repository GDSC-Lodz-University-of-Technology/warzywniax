/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, LinearProgress, Stack, useTheme } from '@mui/material';
import { Button } from 'components/Button/Button';
import { Collection } from 'services/FirebaseService/FireBaseService.types';
import { DashboardPanel } from '../DashboardPanel/DashboardPanel';
import { getShops } from 'services/FirebaseService/ShopsCollection/ShopsService';
import Grid from '@mui/material/Unstable_Grid2';
import { ShopRecord } from 'services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { TextInput } from 'components/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

function UserShopInfo({ shop }: { shop: ShopRecord }) {
  const { t } = useTranslation();
  // Later replace UserSettings with Pick<UserProfile, 'values'>
  // But we don't have a UserProfile type yet
  const { control, handleSubmit } = useForm<ShopRecord>({
    resolver: zodResolver(ShopRecord),
    values: shop,
  });

  const onSubmit = (data: unknown) => console.log(data);
  // On submit should be replaced with a function that updates the user profile
  // but Auth is not yet implemented properly

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid mobile={6}>
          <TextInput
            control={control}
            name='name'
            labelPrefix='dashboard.store'
            fullWidth
          />
        </Grid>
        <Grid mobile={6}>
          <TextInput
            control={control}
            name='description'
            labelPrefix='dashboard.store'
            fullWidth
          />
        </Grid>
        <Grid mobile={6}>
          <TextInput
            control={control}
            name='mainLocation.description'
            labelPrefix='dashboard.store'
            fullWidth
          />
        </Grid>
      </Grid>
      <Stack
        direction='row'
        justifyContent='right'
      >
        <Button
          sx={{ height: '36px' }}
          type='submit'
        >
          {t('dashboard.shop.save')}
        </Button>
      </Stack>
    </form>
  );
}

function UserShops() {
  const theme = useTheme();
  const { isLoading, data: shops } = useQuery({
    queryFn: () => getShops(),
    queryKey: [Collection.SHOPS],
  });

  if (isLoading) {
    return [
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
      </Box>,
    ];
  }
  return shops?.docs.map((shop) => (
    <UserShopInfo
      shop={shop.data()}
      key={shop.id}
    />
  ));
}

export function UserShopsPanel() {
  const { t } = useTranslation();

  return (
    <DashboardPanel
      title={t('dashboard.shop.title')}
      header={t('dashboard.shop.header')}
      cards={UserShops() ?? []}
      imageUrl={
        'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=400,height=400,fit=cover/animal/breed/pictures/613f5a1a89c13770998047.jpg'
      }
    />
  );
}
