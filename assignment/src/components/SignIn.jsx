import React from 'react';
import google from '../assets/Google.png';
import facebook from '../assets/Facebook.png';
import './SignIn.css'

const SignIn = () => (
    <div className="sign-form">

        <button className="  btn-block  google">
            <img src={google} alt="Google" className="icon" /> <span>Continue with Google</span>
        </button>

        <button className=" btn-block  facebook">
            <img src={facebook} alt="Facebook" className="icon" /> <span>Continue with Facebook</span>
        </button>

        <div className="separate"> <hr />Or connect with <hr /></div>

        <input type="email" className="form-control " placeholder="Email"  />
        <input type="password" className="form-control" placeholder="Password" />

        <div className="d-flex justify-content-between checkbox" >
            <label>
                <input type="checkbox" /> <span className="remember">Remember me</span>
            </label>
            <a href="">Forgot password?</a>
        </div>
        <button className=" continue">Continue</button>
    </div>
);

export default SignIn;
