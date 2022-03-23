import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {  Button } from '../../globalStyles';
import GeniusLogo from '../../assets/Img/geniusLogo.png';
import { Nav, NavbarContainer, NavLogo, NavIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink,  MobileIcon } from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                   <NavbarContainer>
                       <NavLogo to="/" onClick={closeMobileMenu}>
                           <img src={GeniusLogo} style={{width:"40px", height: "40px", color: "white", marginRight: "0.5rem"}}/>
                           GENIUS
                       </NavLogo>
                       <MobileIcon onClick={handleClick}>
                           {click ? <FaTimes /> : <FaBars />}
                       </MobileIcon>
                       <NavMenu onClick={handleClick} click={click}>
                           <NavItem>
                               <NavLinks to='/'>
                                   Home
                               </NavLinks>
                           </NavItem>                                         
                           <NavItem>
                               <NavLinks to='/services'>
                                   Services
                               </NavLinks>
                           </NavItem>                                     
                           <NavItem>
                               <NavLinks to='/products'>
                                  products
                               </NavLinks>
                           </NavItem>
                           <NavItemBtn>
                               {button ? (
                                   <NavBtnLink to="/sign-up">
                                       <Button primary>SIGN UP</Button>
                                   </NavBtnLink>
                               ) : (
                                   <NavBtnLink to="/sign-up">
                                       <Button fontBig primary>
                                           SIGN UP
                                       </Button>
                                   </NavBtnLink>
                               )}
                           </NavItemBtn>
                        </NavMenu>
                   </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
