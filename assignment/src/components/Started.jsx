import './Started.css'
import started from '../assets/started.png'

function Started() {
    return(
        <>
        <div className="start-container">
            <div className="start-box">
                <h1>Your <span className="hobby">Hobby</span>, Your <span className="comm">Community...</span></h1>
                <button className="started">Get Started</button>
                <img src={started} alt="" className="img-start" />
            </div>
        </div>
        </>
    )
}

export default Started;