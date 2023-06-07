import {Routes, Route} from 'react-router-dom';

import {AuthRouter, NotAuthRouter} from '../router';

import {CheckUserToken} from '../utils/UsersUtils';


const AppRouter = () => {
    return (
            CheckUserToken()
            ?
            <Routes>
                {AuthRouter.map((route)=>(
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component/>}
                        exact={route.exact}
                    />
                ))}
            </Routes>
            :
            <Routes>
                {NotAuthRouter.map((route)=>(
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component/>}
                        exact={route.exact}
                    />
                ))}
            </Routes>
    )
}

export default AppRouter;