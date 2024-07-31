import React from 'react'
import { HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavContainer, UserNavStyled } from './NavbarStyles'
import {motion} from "framer-motion"  //npm install framer-motion
import {HiHome} from "react-icons/hi" //npm install react-icons
import {FaUserAlt} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai" 
//import { Link } from 'react-router-dom'; npm install react-router-dom

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/">
                <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png" alt="Logo" />
            </a>
        </div>
         <LinksContainerStyled> {/* Contiene el home y inicia sesion */}
            <HomeContainerStyled> {/* Contenedor del home */}
                <motion.div whileTap={{scale: 0.9}} > {/* componente para animacion */} 
                <a href="/">
                    <LinkContainerStyled home > {/* Link separado que comparte estilos con el inica sesion */}
                        <HiHome/> {/* Componente icono del home */}
                    </LinkContainerStyled>
                    Home
                </a>
                </motion.div>
            </HomeContainerStyled>
            <UserNavStyled> {/* componente para user */}
                <UserContainerStyled>
                    <SpanStyled> {/* span para que no sea naranja */}
                        Inicia Sesion
                    </SpanStyled>
                    <FaUserAlt/> {/* Icono de usuario */}
                </UserContainerStyled>
            </UserNavStyled>
            <motion.div whileTap={{scale:0.95}} >
                <MenuContainerStyled> {/* Responsive */}
                    <AiOutlineMenu/>
                </MenuContainerStyled>
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyled> 
  )
}

export default Navbar