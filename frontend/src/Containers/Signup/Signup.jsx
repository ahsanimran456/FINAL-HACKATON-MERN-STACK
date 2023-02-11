import axios from "axios";
import { useState } from "react";

function Signup() {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [password, setpassword] = useState();
    const [image, setimage] = useState();
    const [errormessage, seterrormessage] = useState("");



    const sendimg = () => {
        const picture = document.getElementById("imgae")
        // console.log(picture.files[0])
        // console.log(Name)
        // console.log(Email)
        // console.log(password)
        // console.log(phonenumber)
        const url = URL.createObjectURL(picture.files[0])
        setimage(url)
        // console.log(url)

        const userdetails = {
            fullname: Name,
            email: Email,
            phone: phonenumber,
            password: password }

        let formData = new FormData();
        formData.append("UserProfile", picture.files[0]);
        formData.append("myDetails",
                JSON.stringify(userdetails));
        axios({
            method: 'post',
            url: "http://localhost:50552/signup",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials :true
        })
            .then(res => {
                console.log('upload Success', res);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input type="pasword" onChange={(e) => setpassword(e.target.value)} placeholder="pasword" />
                <input type="number" onChange={(e) => setphonenumber(e.target.value)} placeholder="number" />
                <input type="file" id="imgae" accept="image/*" />

            </div>
            <button onClick={sendimg}>send </button>
            <img src={image} alt="" width={300} height={300} />
        </div>
    );
}

export default Signup;