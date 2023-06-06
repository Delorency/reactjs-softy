import {Routes, Route} from 'react-router-dom'

import {routers} from '../router'


const AppRouter = () => {
    return (
        <Routes>
            {routers.map((route)=>(
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