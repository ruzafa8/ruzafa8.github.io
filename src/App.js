import './App.css'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import CircleMouse from './components/circle-mouse/CircleMouse.tsx'
import StarterCard from './components/starter-card/StarterCard.tsx'

function App() {
  const { t } = useTranslation()
  const [showInitialCard, setShowInitialCard] = React.useState(true)

  return (
    <div className="App bg-animation">
      <CircleMouse />
      <div className='glass'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        { showInitialCard && (<StarterCard onClickGetStarted={() => setShowInitialCard(false)} />) }
        { !showInitialCard && <div>
          <header className="App-header">
            <p id="work-in-progress">{t('work')}</p>
            <h1 className="lato-thin"><Trans i18nKey={'welcome'}></Trans></h1>
          </header>
          {/* <Navigator navItems={navItems} socialItems={socialItems} /> */}
          {/* <section>Formación Académica</section> */}
          {/* <section>Formación Laboral</section> */}
          {/* <section>Proyectos Personales</section> */}
          {/* <section>Habilidades</section> */}
          {/* <section>Logros</section> */}
          {/* <section>Intereses</section> */}
          {/* <section>Idiomas</section> */}
          {/* <section>Contacto</section> */}
          {/* <aside>aside</aside> */}
          {/* <aside>aside</aside> */}
          {/* <Footer /> */}
        </div> }
        </div>
    </div>
  )
}

export default App
