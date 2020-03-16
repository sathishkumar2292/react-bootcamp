import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { auth } from './services/firebase';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await auth.createUserWithEmailAndPassword(email.value, password.value);
            history.push("/user");
        } catch (error) {
            console.log(error);
        }
    }, [history]);
    return (
        <div>
            <h2>Sign up </h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(SignUp);