import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}