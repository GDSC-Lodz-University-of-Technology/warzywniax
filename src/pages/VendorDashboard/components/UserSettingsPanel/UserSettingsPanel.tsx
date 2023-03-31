/* eslint-disable @typescript-eslint/no-misused-promises */
import { AccountType, UserSettings } from './UserSettingsPanel.types';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, Select, Stack } from '@mui/material';
import { Button } from 'components/Button/Button';
import { DashboardPanel } from '../DashboardPanel/DashboardPanel';
import Grid from '@mui/material/Unstable_Grid2';
import { TextInput } from 'components/TextInput/TextInput';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

function UserSettingsPanelForm() {
  const { t } = useTranslation();
  // Later replace UserSettings with Pick<UserProfile, 'values'>
  // But we don't have a UserProfile type yet
  const { control, handleSubmit } = useForm<UserSettings>({
    resolver: zodResolver(UserSettings),
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
            fullWidth
            labelPrefix='dashboard.user'
          />
        </Grid>
        <Grid mobile={6}>
          <TextInput
            control={control}
            name='surname'
            fullWidth
            labelPrefix='dashboard.user'
          />
        </Grid>
        <Grid mobile={6}>
          <TextInput
            control={control}
            name='email'
            fullWidth
            labelPrefix='dashboard.user'
          />
        </Grid>
        <Grid mobile={6}>
          <Controller
            name='accountType'
            control={control}
            render={({ field }) => (
              <Select
                fullWidth
                defaultValue={AccountType.USER}
                {...field}
              >
                <MenuItem value={AccountType.FARMER}>Farmer</MenuItem>
                <MenuItem value={AccountType.USER}>User</MenuItem>
              </Select>
            )}
          />
        </Grid>
        <Grid mobile={12}>
          <TextInput
            control={control}
            name='password'
            fullWidth
            type='password'
            labelPrefix='dashboard.user'
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
          {t('dashboard.user.save')}
        </Button>
      </Stack>
    </form>
  );
}

export function UserSettingsPanel() {
  const { t } = useTranslation();

  return (
    <DashboardPanel
      title={t('dashboard.user.title')}
      header={t('dashboard.user.header')}
      cards={[<UserSettingsPanelForm key='user-settings' />]}
      imageUrl={
        'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=400,height=400,fit=cover/animal/breed/pictures/613f5a1a89c13770998047.jpg'
      }
    />
  );
}
