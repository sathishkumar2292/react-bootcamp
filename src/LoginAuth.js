import React, { useCallback , useContext} from 'react';
import { withRouter, Redirect } from 'react-router';
import { auth } from './services/firebase';
import { AuthContext } from './Auth';

const LoginAuth = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await auth.signInWithEmailAndPassword(email.value, password.value);
            history.push("/user");
        } catch (error) {
            console.log(error);
        }
    }, [history]);

    const {currentUser} = useContext(AuthContext);
    if(currentUser) {
        return <Redirect to="/user" />
    }

    return (
        <div>
            <h2>Login up </h2>
            <form onSubmit={handleLogin}>
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

export default withRouter(LoginAuth);