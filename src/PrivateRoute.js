import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    let test = useContext(AuthContext);
    var currentUser = test != null ? test : {};
    
    return (
         <Route
            {...rest}
            render={routeprops =>
                currentUser && currentUser.email ? (
                    <RouteComponent {...routeprops} />
                ) : (
                        <Redirect to={"/signup"} />
                    )
            }
        />
    );
}

export default PrivateRoute;