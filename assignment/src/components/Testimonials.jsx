import './Testimonials.css';
import sound from '../assets/sound.png'
import quote from '../assets/quote.png'
import frame from '../assets/frame.png'

function Testimonials() {
    return(
        <>
        <div className="test-container">
            <div className="test-box">
                <div className="test">
                <p className="quote"><img src={quote} alt="" /> Testimonials</p>
                <p className="test-content">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                </div>
                <div className="sound">
                    <img src={sound} className="track" />
                    <p className="frame"><img src={frame} alt="" /> </p>
                    <p className="test-name">
                        <p>Shubha Nagarajan</p>
                        <span>Classical Dancer</span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials;