import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login_form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
                <div className="">-------------------------------------------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;