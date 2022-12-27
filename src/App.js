import './App.css';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>{t('work')}</p>
      </header>
      <nav></nav>
      <section>
        <h1><Trans i18nKey={'welcome'}></Trans></h1>
      </section>
      <aside></aside>
      <footer></footer>
    </div>
  );
}

export default App;
