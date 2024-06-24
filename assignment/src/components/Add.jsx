import './Add.css'
import add from '../assets/Add.png'

function Add(){
    return(
        <>
        <div className="add-container">
            <div className="add-box">
                <p className='add-icon'><img src={add} alt="" /> Add your own</p>
                <p className="add-content">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <button className="add-btn">Add new</button>
            </div>
        </div>
        </>
    )
}


export default Add;