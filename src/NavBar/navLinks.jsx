import React  from 'react';
import classes from './cssNav.module.css'

const NavLinks = () => {
     
   
        return (
            <div className={classes.NavLinks}>
            < nav class='navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light bg-light' role='navigation'>
            <a className='navbar-brand' href='#top'>11 Mantras</a>
            <div class='navbar navbar-default navbar-fixed-top' id="navbarSupportedContent">
                <ul class='navbar-nav mr-auto'> 
                    <li class='nav-item'><a class='nav-link' href='#top'> Home</a></li>
                    <li class='nav-item'><a class='nav-link' href='#top'>About Us</a></li>
                    <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' type = ' button' href='#top' id="navbarDropdown" data-toggle='dropdown' >Our Services</a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Services</a>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Services Full Page</a>
                        </div>
                    </li>
                    <li class='nav-item dropdown'>
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
                    </li>
                    <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle' role='button' href='#top' id="navbarDropdown" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Pages </a>
                        <div class='dropdown-menu' id='dropdownMenu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} } > Shop</a>
                            <a class = 'dropdown-item' href='#top' style= {{color:'black', fontSize:'1rem'} }> Action</a>
                            
                        </div>
                    </li>
                    
                    <li class='nav-item dropdown'>
                        <a class='nav-link dropdown-toggle'  href='#top' data-toggle='dropdown'  aria-expanded='false'>Blog</a>
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Grid</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Grid View Left</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}>Blog Grid View Right</a>
                            <a class='dropdown-item' href='#top' style={{color:'black', fontSize:'1rem'}}> Blog Details</a>

                        </div>
                    </li>
                    
                    <li class='nav-item'>
                        <a class='nav-link' href='#top' > Contact </a>  
                    </li>
                   
                   
                    
                    <li class='nav-item'>
                    {/* <Badge color="primary"> */}
                {/* <button><ShoppingCartIcon/></button> */}
                {/* </Badge> */}
                </li>
                
            <li class='nav-item'>
            {/* <Badge color="primary"> */}
            {/* <button><SearchIcon/></button> */}
            {/* </Badge> */}
            </li>
            {/* <li class='nav-item'> */}
                {/* <button style={{backgroundColor:'Orange', color:'White', padding:'15px 32px'}}>Appointment</button> */}
            {/* </li> */}
                    {/* <a className='nav-link' href='#top'> About Us</a> */}
                    
                </ul>
                {/* <button style={{borderColor:'white', marginRight:'40px'}}><ShoppingCartIcon/></button>
                <button style={{borderColor:'white',marginRight:'25px'}}><SearchIcon/></button> */}
                <button style={{backgroundColor:'Orange', color:'White', padding:'15px 32px', borderColor:'white', marginRight:'2px'}}>Appointment</button>

                {/* <li class='nav-item'>
                   <i class="bi bi-cart"></i>
                   </li> */}


            </div>
            {/* <ButtonGroup> */}

            
            {/* </ButtonGroup> */}
            
        </nav>
        </div>
        );
    
}
 
export default NavLinks;