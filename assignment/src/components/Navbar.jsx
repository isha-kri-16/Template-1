import logo from '../assets/logo.png';
import search from '../assets/search.png';
import explore from '../assets/Explore.png';
import hobbies from '../assets/Hobbies.png'
import bookmark from '../assets/bookmark.png'
import notification from '../assets/notification.png'
import product from '../assets/product.png'
import './Navbar.css'



function Navbar() {
    return (
        <>
            <div className="nav-conatiner">
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="" /></div>

                    <div class="search-container">
                        <input type="text" placeholder="Search here..." class="search-input" />
                        <button class="search-button">
                            <img src={search} alt="Search Icon" />
                        </button>
                    </div>

                    <div className="nav-menu">
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={explore} alt="" className='explore' />  <span>Explore</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Product-Community</a></li>
                                <li><a class="dropdown-item" href="#">Places-Venues</a></li>
                                <li><a class="dropdown-item" href="#">Programs-Events</a></li>
                                <li><a class="dropdown-item" href="#">Products-Store</a></li>
                                <li><a class="dropdown-item" href="#">Blogs</a></li>
                                
                            </ul>

                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={hobbies} alt="" className='explore' /> <span>Hobbies</span>
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Product-Community</a></li>
                                <li><a class="dropdown-item" href="#">Places-Venues</a></li>
                                <li><a class="dropdown-item" href="#">Programs-Events</a></li>
                                <li><a class="dropdown-item" href="#">Products-Store</a></li>
                                <li><a class="dropdown-item" href="#">Blogs</a></li>
                            </ul>

                        </div>
                        <div className="icons">
                            <img src={bookmark} alt="" className="icon" />
                            <img src={notification} alt="" className="icon" />
                            <img src={product} alt="" className="icon" />
                            <button className="sign">Sign In</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;










