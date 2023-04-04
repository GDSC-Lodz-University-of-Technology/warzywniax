/* eslint-disable @typescript-eslint/no-misused-promises */
import { CreateShopFormData, LoginFormProps } from './CreateShopForm.types';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid, Stack, Typography } from '@mui/material';
import { Button } from 'components/Button/Button';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateShopForm = ({ onFormSubmit }: LoginFormProps) => {
  const { t } = useTranslation();

  const formMethods = useForm<CreateShopFormData>({
    defaultValues: {
      description: '',
      mainLocationDescription: '',
      name: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(CreateShopFormData),
  });

  return (
    <Grid
      sx={{
        mt: 2,
      }}
      gap={'0px 24px'}
      container
    >
      <Grid
        item
        mobile={12}
        sx={{
          borderRadius: '4px',
          boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
          pb: 6.5,
          px: 8,
        }}
      >
        <Typography
          fontWeight='bold'
          variant='h4'
        >
          {t('shops.create.header')}
        </Typography>
        <FormProvider {...formMethods}>
          <Stack
            component='form'
            onSubmit={formMethods.handleSubmit(onFormSubmit, console.error)}
          >
            <FormInput
              name='name'
              label={t('shops.create.name.label')}
              placeholder={t('shops.create.name.placeholder')}
            />
            <FormInput
              name='description'
              label={t('shops.create.description.label')}
              placeholder={t('shops.create.description.placeholder')}
            />
            <FormInput
              name='mainLocationDescription'
              label={t('shops.create.mainLocation.label')}
              placeholder={t('shops.create.mainLocation.placeholder')}
            />
            <Button
              variant='contained'
              type='submit'
            >
              {t('shops.create.create.label')}
            </Button>
          </Stack>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
