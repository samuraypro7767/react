import React from 'react'
import{ItemNavbarUl} from '../../Ui/ItemNavbarUl/ItemNavbarUl.jsx'

export const Navbar = () => {
  return (
    <>
     <nav className='navbar'>
        <ul className='list'>
          <ItemNavbarUl contenido="Home"/>
          <ItemNavbarUl contenido = "Contactos"/>
          <ItemNavbarUl contenido="Sobre Nosotros"/>
          <ItemNavbarUl contenido = "Clase 1"/>
        </ul>
    </nav>
    </>
  )
}
