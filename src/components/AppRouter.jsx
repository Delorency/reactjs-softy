import {Routes, Route, Navigate} from 'react-router-dom';

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
                <Route path="/" element={<Navigate replace to="/" />} />
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
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
    )
}

export default AppRouter;