import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Hojas-de-Estilo/Navbar.css'

function Navbar() {
    return (
        <nav>
            <NavLink className={ ({isActive})=>(isActive ? 'active':'') }to={'/'}>Inicio</NavLink>
            <NavLink to={'/autores'}>Autores</NavLink>
            <NavLink to={'/temas'}>Temas</NavLink>
        </nav>
    )
}

export default Navbar
