import './Footer.css';
import youtube from '../src/assets/yt.png'
import face from '../src/assets/fb.png'
import email from '../src/assets/email.png'
import gogle from '../src/assets/gogle.png'
import insta from '../src/assets/insta.png'
import twitter from '../src/assets/twitter.png'
import print from '../src/assets/print.png'
import telegram from '../src/assets/telegram.png'




function Footer() {
    return(
        <>
        {/* <div className="footer">
            <div className="footer-box">

                <div className="footer1">
                    <p className="main">Hobbycue</p>
                    <ul className="items">
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Work with Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer1 footer2">
                    <p className="main">How Do I</p>
                    <ul className="items">
                        <li>Sign up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Add a Blog Post</li>
                    </ul>
                </div>

                <div className="footer1 footer 3">
                    <p className="main">Quick Links</p>
                    <ul className="items">
                        <li>Listings</li>
                        <li>Blog Posts</li>
                        <li>Shop / Store</li>
                        <li>Community</li>
                        <li>Contact Us</li>
                    </ul>
                </div> */}

                {/* <div className=" footer4"> */}
                    {/* <p className="main">Social Media</p>
                    <div className="images">
                        <img src={face} alt="" className="imgs" />
                        <img src={twitter} alt="" className="imgs" />
                        <img src={insta} alt="" className="imgs" />
                        <img src={print} alt="" className="imgs" />
                        <img src={gogle} alt="" className="imgs" />
                        <img src={youtube} alt="" className="imgs" />
                        <img src={telegram} alt="" className="imgs" />
                        <img src={email} alt="" className="imgs" />
                    </div>

                    <p className="invite">Invite Friends</p>
                    <div className="invite-box">
                    <input type="text" className="email"  placeholder='Email ID'  /> 
                    <span><button className='invite-btn'>Invite</button></span>
                </div> */}

 




{/* 
<div class="social-media">
            <h3 className='main social'>Social Media</h3>
            <div class="icons">
                        <img src={face} alt="" className="imgs" />
                        <img src={twitter} alt="" className="imgs" />
                        <img src={insta} alt="" className="imgs" />
                        <img src={print} alt="" className="imgs" />
                        <img src={gogle} alt="" className="imgs" />
                        <img src={youtube} alt="" className="imgs" />
                        <img src={telegram} alt="" className="imgs" />
                        <img src={email} alt="" className="imgs" />
            </div>
        </div>
        <div class="invite-friends">
            <h3 className='invite'>Invite Friends</h3>
            <div class="invite-form">
                <input type="email" placeholder="Email ID" class="invite-input email" />
                <button class="invite-button">Invite</button>
            </div>
        </div> */}
                
                {/* </div>
                </div>

            </div>

            
        </div>

        <div className="last">
                <p>c Purple Cues Private Limited</p>
            </div> */}




















        <div className="footer-container">
            <div className="footer-box">
                <div className="foot-box">
                    <p className='main'>Hobbycue</p>
                    <p className="sub-box">About Us</p>
                    <p className="sub-box">Our Services</p>
                    <p className="sub-box">Work with Us</p>
                    <p className="sub-box">FAQ</p>
                    <p className="sub-box">Contact Us</p>
                </div>

                <div className="foot-box">
                    <p className='main'>How Do I</p>
                    <p className="sub-box">Sign Up</p>
                    <p className="sub-box">Add a Listing</p>
                    <p className="sub-box">Claim Listing</p>
                    <p className="sub-box">Post a Query</p>
                    <p className='sub-box'>Other Queries</p>
                </div>

                <div className="foot-box">
                    <p className='main'>Quick Links</p>
                    <p className="sub-box">Listings</p>
                    <p className="sub-box">Blog Posts</p>
                    <p className="sub-box">Shop / Store</p>
                    <p className="sub-box">Community</p>
                    <p className="sub-box">Other Links</p>
                </div>

                <div className="foot-box">
                    <p className='main'>Social Media</p>
                    <p className="images">
                        <img src={face} alt="" className="imgs" />
                        <img src={twitter} alt="" className="imgs" />
                        <img src={insta} alt="" className="imgs" />
                        <img src={print} alt="" className="imgs" />
                        <img src={gogle} alt="" className="imgs" />
                        <img src={youtube} alt="" className="imgs" />
                        <img src={telegram} alt="" className="imgs" />
                        <img src={email} alt="" className="imgs" />
                    </p>
                    <p className="invite">Invite Friends</p>
                    <p className="email">
                    <input type="text" className='footer-email ' placeholder='Email ID' />
                    <button className="invite-btn">Invite</button>
                    </p>
                </div>
                
            </div>
        </div>
        <div className="last">
                <p>c Purple Cues Private Limited</p>
            </div> 


        </>
    )
}

export default Footer;