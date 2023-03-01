import { useTranslation } from 'react-i18next';

export function ShopsPage() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('shops.title')}</h1>
    </main>
  );
}
