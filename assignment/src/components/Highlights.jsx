import './Highlights.css'
import place from '../assets/place.png'
import prod from '../assets/prod.png'
import group from '../assets/Group.png'
import vector from '../assets/Vector.png'


function Highlights() {
    return(
        <>
        <div className="highlights">
            <div className="boxes">
            <div className="box1">
                <p className='man'> <img src={group} alt="" /> <span>People</span></p>

                <p className="people-content">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>

                <button className="ppl">Connect</button>
            </div>

            <div className="box1 box2">
                <p className='man'> <img src={place} alt="" /> <span>Place</span></p>
                <p className="people-content">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                <button className="ppl">Meet up</button>
            </div>

            <div className="box1 box3">
                <p className='man'> <img src={prod} alt="" /> <span>Product</span></p>
                <p className="people-content">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                <button className="ppl">Got it</button>
            </div>

            <div className="box1 box4">
                <p className='man'> <img src={vector} alt="" /> <span>Program</span></p>
                <p className="people-content">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                <button className="ppl">Attend</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Highlights;