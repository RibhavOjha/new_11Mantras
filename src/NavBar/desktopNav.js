import React  from 'react';
import NavLinks from './navLinks';
import classes from './cssNav.module.css'
const DesktopNav = () => {
    
    return (
        <nav className={classes.DesktopNav} >
            <NavLinks/>
            
        </nav>
        
    )
        
    
}
 
export default DesktopNav;