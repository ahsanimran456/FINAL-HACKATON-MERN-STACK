import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { useState, useEffect } from "react";
import Signup from '../Containers/Signup/Signup';
import Home from '../Containers/Home/Home';
import Usercredentials from '../Containers/UserCredentials/UserCredentials';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Admin from '../Containers/Admin/Admin';


function Router() {
    const [isLogin, setisLogin] = useState(false);
    const [knowuser, setknowuser] = useState(false);

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user);
                console.log("email", user.email);
                if (user.email == "admin@gmail.com") {
                    setknowuser(true)
                }
                setisLogin(true)
            } else {
                setisLogin(false)
                console.log("no user found");
            }
        });
    }, [])


    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Usercredentials />} />
                <Route path="/home" element={<Home />} /> */}
                <Route path={"/"} element={<Usercredentials />} />
                <Route path={"/home"} element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;