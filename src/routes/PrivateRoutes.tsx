import React, {FC} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {PrivateRouteProps} from "./type";

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('blah:auth')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
