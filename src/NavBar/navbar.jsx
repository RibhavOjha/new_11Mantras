import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import classes from './cssNav.module.css'
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import SearchIcon from '@material-ui/icons/Search';
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import logoVideo from './videos/video.mp4';
// const navitems = document.getElementById('dropdownMenu')
// navitems.removeAttribute('style');

// @media (max-width: 768px){
//     flexflow: column nowrap;
// }

function Navbar () {
    
    
    
        return (
            <nav className={classes.Navbar} >
                <MobileNav/>
                <DesktopNav/>

                
            </nav>

        );
    
}
 
export default Navbar ;