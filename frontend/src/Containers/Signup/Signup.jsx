import axios from "axios";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
    // const [Name, setName] = useState();
    // const [Email, setEmail] = useState();
    // const [phonenumber, setphonenumber] = useState();
    // const [password, setpassword] = useState();
    // const [image, setimage] = useState();
    // const [errormessage, seterrormessage] = useState("");
    // const [input, setinput] = useState();
    const [togglestate, settogglestate] = useState(true);

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log('Success:', values.Email);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const Createuser = (values) => {

        const picture = document.getElementById("imgae")
        // const url = URL.createObjectURL(picture.files[0])
        // setimage(url)
        if(values.password === values.ConfirmPass){
        const userdetails = {
            fullname: values.UserName.trim(),
            email: values.Email.trim(),
            password: values.password.trim()
            // phone: phonenumber,
        }

        let formData = new FormData();
        formData.append("UserProfile", picture.files[0]);
        formData.append("myDetails",
            JSON.stringify(userdetails));
        axios({
            method: 'post',
            url: "http://localhost:50552/signup",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
            .then(res => {
                console.log('upload Success', res);
                if (res.data.message == "Added User Successfully") {
                    toast.success("SignIn Successfully !")
                    values.UserName = ""
                    values.Email = ""
                    values.password = ''
                }
                else if (res.data.message== 'Email is already in use') {
                    toast.warn(`Email is already in use`)
                    return
                } else if (res.data.Message == 'Required parameter is missing') {
                    toast.error(`Required parameter in missing`)
                    return
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong")
            })
        }else{
            toast.warn("password doesn't match")

        }




    }


    // const sendimg = () => {
    //     const picture = document.getElementById("imgae")
    //     const url = URL.createObjectURL(picture.files[0])
    //     setimage(url)
    //     const userdetails = {
    //         fullname: Name,
    //         email: Email,
    //         phone: phonenumber,
    //         password: password
    //     }

    //     let formData = new FormData();
    //     formData.append("UserProfile", picture.files[0]);
    //     formData.append("myDetails",
    //         JSON.stringify(userdetails));
    //     axios({
    //         method: 'post',
    //         url: "http://localhost:50552/signup",
    //         data: formData,
    //         headers: { 'Content-Type': 'multipart/form-data' },
    //         withCredentials: true
    //     })
    //         .then(res => {
    //             console.log('upload Success', res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }

    const toggle = () => {
        settogglestate(!togglestate)
    }

    return (
        // <div>
        //     <div>
        //         <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
        //         <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        //         <input type="pasword" onChange={(e) => setpassword(e.target.value)} placeholder="pasword" />
        //         <input type="number" onChange={(e) => setphonenumber(e.target.value)} placeholder="number" />
        //         <input type="file" id="imgae" accept="image/*" />
        //     </div>
        //     <button onClick={sendimg}>send</button>
        //     <img src={image} alt="" width={300} height={300} />
        // </div>
        <div className="Main">
            <ToastContainer
                position="bottom-right"
                theme="colored"
                autoClose={3000} />
            {
                togglestate ?
                    <div className="login">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-6">
                                <div className="loginform">
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        style={{
                                            maxWidth: 900,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="on"
                                    >
                                        <Form.Item
                                            label="Email"
                                            name="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Email !',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#B0A4FD" }}>
                                                Login 
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div>
                                        <p onClick={toggle} style={{ cursor: "pointer", }}>
                                            Don't have an account? Register here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="signup">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-6">
                                <div className="signupform">
                                    <Form
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        style={{
                                            maxWidth: 900,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={Createuser}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="on"
                                    >
                                        <div style={{ textAlign: "center", position: "relative" }}>
                                            <div style={{ position: "relative", cursor: "pointer" }}>
                                                <img src={require("../../assests/images/userprofile.gif")} width={100} height={100} alt="" />
                                            </div>
                                            <Input type="file" className="img" id="imgae" accept="image/*" />
                                        </div>

                                        <Form.Item
                                            label="UserName"
                                            name="UserName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Name !',
                                                },
                                            ]}
                                        >
                                            <Input type="text" />
                                        </Form.Item>


                                        <Form.Item
                                            label="Email"
                                            name="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Email !',
                                                },
                                            ]}
                                        >
                                            <Input type="email" />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            label="Confirm Pass"
                                            name="ConfirmPass"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Confirm your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#B0A4FD" }}>
                                                Signup
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div>
                                        <p onClick={toggle} style={{ cursor: "pointer" }}>
                                            Do you have an account? Login
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Signup;