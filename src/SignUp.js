import React, { useCallback, useContext, useState } from 'react';
import { withRouter } from 'react-router';
import { auth } from './services/firebase';
import { AuthContext } from './Auth';

const SignUp = ({ history }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { name, email, password } = event.target.elements;
        try {
            await auth.createUserWithEmailAndPassword(email.value, password.value);
            history.push("/user");
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
    }, [history]);

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await auth.signInWithEmailAndPassword(email.value, password.value);
            history.push("/user");
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error);
        }
    }, [history]);

    let test = useContext(AuthContext);
    var currentUser = test ? test : {};

    if (currentUser && currentUser.email) {
        history.push("/user");
    }

    let [loginShow, setLoginShow] = useState(true);
    function toggleForm(e) {
        e.preventDefault();
        setLoginShow(!loginShow);
        setErrorMessage('');
    }
    let form = loginShow ?
        <div className="login-form">
            <h2 className="mb-4 text-center text-primary">Login</h2>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
                    <div className="col-sm-12">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-12 col-form-label"></label>
                    <div className="col-sm-12 text-right">
                        <button type="submit" className="btn btn-primary col-sm-12">Login</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-12 text-center">Or</label>
                    <label className="col-sm-12 text-center"><a href="#" onClick={(e) => toggleForm(e)}>Register now</a></label>
                </div>
            </form>
        </div>
        : <div className="login-form">
            <h2 className="mb-4 text-center text-primary">Register now</h2>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <form onSubmit={handleSignUp}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-12 col-form-label">Name</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
                    <div className="col-sm-12">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-12 col-form-label"></label>
                    <div className="col-sm-12 text-right">
                        <button type="submit" className="btn btn-primary col-sm-12">Register</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-12 text-center">Or</label>
                    <label className="col-sm-12 text-center"><a href="#" onClick={(e) => toggleForm(e)}>Already have account? Login here</a></label>
                </div>
            </form>
        </div>;
    return (
        <div className="col-10 col-sm-8 col-md-5 mb-5 pb-5" style={{ margin: "0 auto" }}>
            {form}
        </div>
    );
}

export default withRouter(SignUp);