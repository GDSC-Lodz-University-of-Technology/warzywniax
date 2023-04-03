import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Paper, Stack } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from 'components/Button/Button';
import { Collection } from 'services/FirebaseService/FireBaseService.types';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { ShopRecord } from 'services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { updateShop } from 'services/FirebaseService/ShopsCollection/ShopsService';
import { UserShopInfoProps } from './UserShopInfo.types';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

export function UserShopInfo({ shop }: UserShopInfoProps) {
  const { t } = useTranslation();
  const formMethods = useForm<ShopRecord>({
    resolver: zodResolver(ShopRecord),
    values: shop.data(),
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (values: ShopRecord) => updateShop(shop.id, values),
    onSuccess: () => queryClient.invalidateQueries([Collection.SHOPS]),
  });

  const onSubmit: SubmitHandler<ShopRecord> = (data) => mutate(data);

  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <FormProvider {...formMethods}>
        <Stack
          component='form'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={formMethods.handleSubmit(onSubmit)}
          spacing={3}
        >
          <FormInput
            name='name'
            label={t('dashboard.shop.name.label')}
            placeholder={t('dashboard.shop.name.placeholder')}
          />
          <FormInput
            name='description'
            label={t('dashboard.shop.description.label')}
            placeholder={t('dashboard.shop.description.placeholder')}
          />
          <FormInput
            name='mainLocation.description'
            label={t('dashboard.shop.location.label')}
            placeholder={t('dashboard.shop.location.placeholder')}
          />
          <Stack
            direction='row'
            justifyContent='right'
          >
            <Button
              disabled={isLoading || !formMethods.formState.isDirty}
              isLoading={isLoading}
              type='submit'
            >
              {t('dashboard.shop.save.label')}
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </Paper>
  );
}
