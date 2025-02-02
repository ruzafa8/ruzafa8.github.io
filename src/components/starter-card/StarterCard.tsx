import React from 'react'
import Writer from '../writer/writer.tsx'
import Nomai from '../nomai/Nomai.tsx'

export interface IStarterCardProps {
  onClickGetStarted: () => void
}

const ITEMS = [
  'Soy Ingeniero,',
  'artesano de código,',
  'me encanta innovar y aprender cosas nuevas',
  'y... sí, ahora estás en el <span style="color: green">espacio</span>; 🥑',
]

const StarterCard = ({ onClickGetStarted }: IStarterCardProps): JSX.Element => {
  const [showSecondWriter, setShowSecondWriter] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondWriter(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClickGetStarted()
      }
    }
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [onClickGetStarted])

  return <header className='p-4'>
    <div className='d-flex flex-row align-items-center justify-content-around'
      style={{ width: '90vw', height: '90vh' }}>
      <div>
        <Writer items={['¡Hola <span style="color: red">Mundo</span>!']}/>
        <p className='lato-bold'>Soy Alejandro Ruzafa,</p>
        <div style={{ height: '100px' }}>
          {showSecondWriter ? <Writer items={ITEMS} velocity={2} /> : null}
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <img src="/coordinates.svg" alt="gif" width={150} height={150} />
        <p className="lato-thin" style={{maxWidth: "22em", textAlign: "justify"}}>A conscious observer has entered the eye.
        I wonder what happens now. Is is time to find out?</p>
        <Nomai size={25} className='mt-4' animateAlways onClick={onClickGetStarted}/>
        <div className='lato-light pt-4' style={{ fontSize: '0.8rem', width: "15em", textAlign: 'center' }}>
          Presiona Enter, Espacio o haz click en <span style={{color: "lime"}}>este logo</span> para continuar.
        </div>
      </div>
    </div>
  </header>
}

export default StarterCard