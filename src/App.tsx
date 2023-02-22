import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <h1>{t('app.welcome')}</h1>
    </div>
  );
}
