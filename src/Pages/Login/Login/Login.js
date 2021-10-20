import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, signInUsingEmaiAndPassword, handlePasswordChange, handleEmailChange, toggleLoginRegister, error, isLogin, handleRegistration, handleNameChanged } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="mx-5 mt-5 login-container">
            <h2 className="text-center mb-4">Please <span className="text-primary">{isLogin ? "Login" : "Register"}</span></h2>
            <form onSubmit={handleRegistration}>
                {!isLogin && <div className="row mb-3 px-5">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChanged} type="text" className="form-control w-75" id="inputName" required />
                    </div>
                </div>}
                <div className="row mb-3 px-5">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control w-75" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3 px-5">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control w-75" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check mx-5">
                            <input onChange={toggleLoginRegister} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registerd?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button onClick={signInUsingEmaiAndPassword} type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
                <button className="btn btn-primary ms-2" onClick={handleGoogleLogin}>Google Sign In</button>
            </form>
            <br /><br /><br /><br />
        </div>
    );
};

export default Login;