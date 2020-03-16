import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import {auth} from './services/firebase';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    //let userId = auth.currentUser ? auth.currentUser.uid : false;
    console.log(currentUser);

    return (
        //<Route {...rest} render={routeprops =>(<Redirect to={"/user"} />)} />
         <Route
            {...rest}
            render={routeprops =>
                !!currentUser ? (
                    <RouteComponent {...routeprops} />
                ) : (
                        <Redirect to={"/signup"} />
                    )
            }
        />
    );
}

export default PrivateRoute;