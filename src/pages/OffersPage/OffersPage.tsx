import { useTranslation } from 'react-i18next';

export function OffersPage() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('offers.title')}</h1>
    </main>
  );
}
