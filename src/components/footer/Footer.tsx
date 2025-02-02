import React from 'react'
import Nomai from '../nomai/Nomai.tsx'

const Footer = (): JSX.Element => (
  <footer className='d-flex flex-column align-items-center'>
    <img src="/coordinates.svg" alt="gif" width={150} height={150} />
    <p className="lato-thin">
      A conscious observer has entered the eye. <br/>
      I wonder what happens now. Is is time to find out?
    </p>
    <Nomai size={25} />
  </footer>
)

export default Footer