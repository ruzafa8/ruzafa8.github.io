import './App.css'
import { Trans } from 'react-i18next'
import Writer from './components/writer/writer.tsx'

const ITEMS = [
  'Hello, <span style="color: red">World</span>!',
  'This is my <span style="color: green">website</span>!',
  'And... yes, you are in the <span style="color: green">space</span> now :D',
]

function App() {
  // const { t } = useTranslation()
  return (
    <div className="App bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <header className="App-header">
        {/* <p id="work-in-progress">{t('work')}</p> */}
        <h1 className="lato-thin"><Trans i18nKey={'welcome'}></Trans></h1>
      </header>
      <nav></nav>
      <section>
        <Writer items={ITEMS}/>
        {/* <List date="3/02/2007" title='Pagina de hacer agua de uwu'/> */}
      </section>
      <aside></aside>
      <footer></footer>
    </div>
  )
}

export default App
