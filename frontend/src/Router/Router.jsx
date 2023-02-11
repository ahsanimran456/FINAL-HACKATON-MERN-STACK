import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from '../Containers/Signup/Signup';
import Login from '../Containers/Login/Login';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Signup />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;