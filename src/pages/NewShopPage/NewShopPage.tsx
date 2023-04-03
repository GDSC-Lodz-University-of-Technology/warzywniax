import { BaseLayout } from 'templates/BaseLayout/BaseLayout';
import { createShop } from 'services/FirebaseService/ShopsCollection/ShopsService';
import { CreateShopForm } from './components/CreateShopForm/CreateShopForm';
import { CreateShopFormData } from './components/CreateShopForm/CreateShopForm.types';
import { GeoPoint } from '@firebase/firestore';
import { getAuthUser } from 'services/FirebaseService/AuthService/AuthService';
import { ShopRecord } from 'services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const NewShopPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: createShop,
    onSuccess: () => navigate('/shops'),
  });
  const user = getAuthUser();

  const handleSubmit: SubmitHandler<CreateShopFormData> = ({
    name,
    description,
    mainLocationDescription,
  }) => {
    if (user === null) {
      // Ideally, we would open a modal here, but we don't have any modals yet
      return;
    }
    const shopRecord: ShopRecord = {
      description: description,
      mainLocation: {
        description: mainLocationDescription,
        geoPoint: new GeoPoint(0, 0),
        photoUrl: '',
      },
      name: name,
      owner: {
        avatarUrl: user.photoURL ?? '',
        firstName: user.displayName ?? '',
        lastName: '',
        shopOwnerId: user.uid,
      },
    };

    mutate(shopRecord);
  };

  return (
    <BaseLayout
      mainWrapperSx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        pt: { desktop: 5, mobile: 2 },
        px: { desktop: 23, mobile: 5 },
      }}
      isLoading={isLoading}
    >
      <CreateShopForm onFormSubmit={handleSubmit} />
    </BaseLayout>
  );
};
