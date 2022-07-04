import React from 'react';
import NavLinks from './navLinks';
import classes from './cssNav.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react'


const MobileNav = () => {    
    const [open, setOpen] = useState(false);
    return (
        <nav className={classes.MobileNav}>
            { !open ?<CgMenuRound className={classes.Hamburger} size='40px' onClick={ 
                () => setOpen(!open)
            }/> : <CgCloseO className={classes.Hamburger} size='40px' onClick={ 
                () => setOpen(!open)
            }/>}
            
            {open && <NavLinks/>}
            
        
        </nav>
        
    )
        
    
}
 
export default MobileNav;