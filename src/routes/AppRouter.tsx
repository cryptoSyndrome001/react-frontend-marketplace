import {FC, Suspense} from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { routes } from './routes'
import {PrivateRoute} from './PrivateRoutes'
interface AppProps {}
export const AppRouter: FC<AppProps> = (props) => {
    return (
        <HashRouter>
            <Suspense fallback={<div className="loader"></div>}>
                <Switch>
                    {routes.map((route) => {
                        return route.protected ? (
                            <PrivateRoute
                                key={route.name}
                                {...route}
                                {...props}
                            />
                        ): (
                            <Route key={route.name} {...route} {...props} />
                        )
                    })}
                </Switch>
            </Suspense>
        </HashRouter>
    )
}
