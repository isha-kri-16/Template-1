

import React, { useState } from 'react';
import './Content.css';
import people from '../assets/people.png';
import SignIn from './SignIn';
import JoinIn from './JoinIn';

const Content = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="content">
            <div className="content-left">
                <div className="content-heading">
                    <p>Explore your <span className="hobby">hobby</span> or <span className="passion">passion</span></p>
                    <br />
                    <p className="para">
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        <br /> <br />
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                    </p>
                    <img src={people} alt="" className='people' />
                </div>
            </div>

            <div className="content-right">
                <div className="login-container">
                    <div className="login-tabs">
                        <button
                            className={`login-tab ${isSignIn ? 'active' : ''}`}
                            onClick={() => setIsSignIn(true)}
                        >
                            Sign In
                        </button>
                        <button
                            className={`login-tab ${!isSignIn ? 'active' : ''}`}
                            onClick={() => setIsSignIn(false)}
                        >
                            Join In
                        </button>
                    </div>
                    <div className="login-content">
                        {isSignIn ? <SignIn /> : <JoinIn />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
