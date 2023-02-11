import axios from "axios";
import { useState } from "react";

function Login() {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [password, setpassword] = useState();

    const Adduser = () => {
        axios.post(`http://localhost:50552/login`, {
            fullname: Name,
            email: Email,
            phone: phonenumber,
            password: password,
        }, {
            withCredentials: true
        })
            .then((res) => console.log("res====>", res))
            .catch((err) => console.log("errr", err))
    }
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <br />
            <input type="text" onChange={(e) => setpassword(e.target.value)} placeholder="setpassword" />
            <br />
            <input type="number" onChange={(e) => setphonenumber(e.target.value)} placeholder="number" />
            <button onClick={Adduser}>login</button>


        </div>
    );
}

export default Login;