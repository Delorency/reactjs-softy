import {Routes, Route, Navigate} from 'react-router-dom';

import {AuthRouter, NotAuthRouter} from '../router';

import {CheckUserToken} from '../utils/UsersUtils';
import ErrorPage from '../pages/ErrorPage';


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
                <Route path="/login" element={<Navigate replace to="/" />} />
                <Route path="/registration" element={<Navigate replace to="/" />} />
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
                <Route render={ErrorPage} />
            </Routes>
    )
}

export default AppRouter;