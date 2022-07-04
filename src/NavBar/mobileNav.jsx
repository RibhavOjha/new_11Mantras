import React from 'react';
import NavLinks from './navLinks';
import classes from './cssNav.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react'


const MobileNav = () => {    
    const [open, setOpen] = useState(false);

    const hamburgerMenu = <CgMenuRound className={classes.Hamburger} size='40px' onClick={ 
        () => setOpen(!open) }/> 
    
    const crossMenu = <CgCloseO className={classes.Hamburger} size='40px' onClick={ 
        () => setOpen(!open) 
    } />
    

    return (
        <nav className={classes.MobileNav}>
            { !open ? hamburgerMenu
           : crossMenu}
            
            {open && <NavLinks/>}
            
        
        </nav>
        
    )
        
    
}
 
export default MobileNav;