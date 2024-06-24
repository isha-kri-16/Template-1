import React from 'react';
import google from '../assets/Google.png';
import facebook from '../assets/Facebook.png';
import './JoinIn.css'

const JoinIn = () => (
    <div className="sign-form">

        <button className=" btn-block google">
            <img src={google} alt="Google" className="icon" />  <span>Continue with Google</span>
        </button>

        <button className=" btn-block  facebook">
            <img src={facebook} alt="Facebook" className="icon" /> <span>Continue with Facebook</span> 
        </button>

        <div className="separate"> <hr />Or connect with <hr /></div>

        <input type="email" className="form-control" placeholder="Email" />
        <input type="password" className="form-control" placeholder="Password" />

        <div className="password-strength">Password strength</div>

        <p className="terms">
            By continuing, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
        </p>

        <button className="continue">Agree and Continue</button>
    </div>
);

export default JoinIn;
