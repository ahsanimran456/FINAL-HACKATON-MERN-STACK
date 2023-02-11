import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from '../Containers/Signup/Signup';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;