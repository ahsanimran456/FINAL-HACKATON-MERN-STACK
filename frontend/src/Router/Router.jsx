import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { useState, useEffect } from "react";
import Signup from '../Containers/Signup/Signup';
import Usercredentials from '../Containers/UserCredentials/UserCredentials';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Admin from '../Containers/Admin/Admin';
import Userprofile from '../Containers/UserProfile/Userprofile';
import AddProducts from '../Containers/Admin/Addproducts';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Usercredentials />} />
                <Route path={"/user"} element={<Userprofile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/addproduct" element={<AddProducts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;