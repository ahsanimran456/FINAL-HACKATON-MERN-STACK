import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import Signup from '../Containers/Signup/Signup';
import Login from '../Containers/Login/Login';
import Home from '../Containers/Home/Home';


function Router() {
    const [isLogin, setisLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("Token")
        if (token) {
            setisLogin(true)
        }
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={isLogin ? <Home /> : <Signup />} />
                <Route path={"/login"} element={isLogin ? <Home /> : <Login />} />
                <Route path={"/home"} element={isLogin ? <Home /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;