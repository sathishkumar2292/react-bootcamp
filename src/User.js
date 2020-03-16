import React, {useContext} from 'react';
import { AuthContext } from './Auth';


const User = () => {
    const userObj = useContext(AuthContext);
    console.log(userObj);
    return(
        <div>
            <p>Hi {userObj.displayName}!</p>
            <p>Your email id: {userObj.email}</p>
        </div>
    );
}

export default User;