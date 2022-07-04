import React  from 'react';
import classes from './cssNav.module.css'
import {motion} from 'framer-motion'

const NavLinks = () => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y:0}
     
   
        return (
            <div className={classes.NavLinks}>
            <nav className={classes.NavLinks}>
                <ul>
                    <motion.li 
                    initial={animateFrom }
                    animate={animateTo}><a href="#top">Home</a></motion.li>
                    <motion.li initial={animateFrom }
                    animate={animateTo}><a href='#top'> About </a></motion.li>
                    <motion.li initial={animateFrom }
                    animate={animateTo} class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' type = ' button' href='#top' id="navbarDropdown" data-toggle='dropdown' >Our Services</a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Services</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Services Full Page</a>
                        </div>
                    </motion.li>
                    <motion.li initial={animateFrom }
                    animate={animateTo} class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' role='button' href='#top' id="navbarDropdown" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Forecast </a>
                        <div class='dropdown-menu' href='#top' id='dropdownMenu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} } > Aries</a>
                            <a class = 'dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Taurus</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Gemini</a>
                            <a class='dropdown-item'href='#top'  style= {{color:'black', fontSize:'1rem'} }> Cancer</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Leo</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Virgo</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Libra</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Sccorpio</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Sagittarius</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Capricon</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Aquarious</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Pisces</a>
                        </div>
                    </motion.li>
                    <motion.li initial={animateFrom }
                    animate={animateTo} class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' role='button' href='#top' id="navbarDropdown" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Pages </a>
                        <div class='dropdown-menu' id='dropdownMenu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} } > Shop</a>
                            <a class = 'dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Action</a>
                            
                        </div>
                    </motion.li>
                    
                    <motion.li initial={animateFrom }
                    animate={animateTo} class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle'  href='#top' data-toggle='dropdown'  aria-expanded='false'>Blog</a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Grid</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Grid View Left</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}>Blog Grid View Right</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Details</a>

                        </div>
                    </motion.li>

                    <motion.li initial={animateFrom }
                    animate={animateTo}><a href='#top'> Contact</a></motion.li>
                    <motion.li initial={animateFrom }
                    animate={animateTo}> <button style={{backgroundColor:'orange', borderColor:'orange'}}> Appointment</button></motion.li>

                </ul>
            
        </nav>
        </div>
        );
    
}
 
export default NavLinks;