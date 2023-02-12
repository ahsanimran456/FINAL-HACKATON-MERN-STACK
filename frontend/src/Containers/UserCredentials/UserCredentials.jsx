import axios from "axios";
import { useState } from "react";
import {  Checkbox, Form, Input } from 'antd';
import './Userscreen.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Blocks } from 'react-loader-spinner'
import { Button } from 'react-bootstrap';
import {UserAddOutlined ,
    PhoneOutlined,
    MailOutlined ,
    EyeOutlined
}from  '@ant-design/icons'

function UserCredentials() {

    const [togglestate, settogglestate] = useState(false);
    const [loader, setloader] = useState(false);


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const Loginuser = (values) => {

        // // console.log('Success:', values);
        // setloader(true)
        // axios.post(`http://localhost:50552/login`, {
        //     email: values.Email,
        //     password: values.password,
        //     // fullname: values.Email,
        //     // phone: phonenumber,
        // }, {
        //     withCredentials: true
        // })
        //     .then((res) => {
        //         console.log("res====>", res)
        //         // console.log("res====>", res.data.Token)
        //         if (res.data.message == "login successfully") {
        //             toast.success("SignIn Successfully !")
        //             console.log("token", res.data.Token)
        //             localStorage.setItem("Token", res.data.Token)
        //             window.location.reload();
        //             values.Email = ""
        //             values.password = ''
        //         }
        //         else if (res.data.message == "User not found") {
        //             toast.error("User not found ")
        //         }
        //         setloader(false)

        //     })
        //     .catch((err) => {
        //         setloader(false)
        //     })
    };


    const Createuser = (values) => {
        // setloader(true)
        // const picture = document.getElementById("imgae")
        // // const url = URL.createObjectURL(picture.files[0])
        // // setimage(url)
        // if (values.password === values.ConfirmPass) {
        //     const userdetails = {
        //         fullname: values.UserName.trim(),
        //         email: values.Email.trim(),
        //         password: values.password.trim()
        //         // phone: phonenumber,
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
        //             if (res.data.message == "Added User Successfully") {
        //                 toast.success("SignIn Successfully !")
        //                 localStorage.setItem("Token", res.data.Token)
        //                 window.location.reload();
        //                 values.UserName = ""
        //                 values.Email = ""
        //                 values.password = ''
        //             }
        //             else if (res.data.message == 'Email is already in use') {
        //                 toast.warn(`Email is already in use`)
        //             } else if (res.data.Message == 'Required parameter is missing') {
        //                 toast.error(`Required parameter in missing`)
        //             }
        //             setloader(false)
        //         })
        //         .catch(err => {
        //             console.log(err);
        //             toast.error("Something went wrong")
        //             setloader(false)

        //         })
        // } else {
        //     toast.warn("confirm password doesn't match")

        // }

    }


    const toggle = () => {
        settogglestate(!togglestate)
    }

    return (
  
        <div className="Main">
                {  togglestate ? 
            <div className="login">
                <div className="header">
                    <h2>
                        SALANI WELFARE
                    </h2>
                    <h6>
                        ONLINE DISTOUNT STORE
                    </h6>
                </div>
                <div className="body">
                     <div>
                        <span className="icons"><MailOutlined /></span>
                        <input type="email" required placeholder="Email"  />
                    </div>
                    <div>
                         <span className="icons"><EyeOutlined /></span>
                        <input type="password" required placeholder="Password" />
                        
                    </div>
                    <div className="btn-su">
                        <button>
                            <span style={{fontWeight:"700",color:"#fff"}}>
                             Sign In

                            </span>
                        </button>
                    </div>
                    <div className="">
                            <p style={{color:"#024F9D",fontWeight:600,cursor:"pointer"}} onClick={toggle}>
                                Don't havean account? Register
                            </p>
                    </div>
                </div>
            </div> :
             <div className="login">
             <div className="header">
                 <h2>
                     SALANI WELFARE
                 </h2>
                 <h6>
                     ONLINE DISTOUNT STORE
                 </h6>
             </div>
             <div className="body">
                 <div>
                     <span className="icons"><UserAddOutlined /></span>
                     <input type="text" required placeholder="Full Name" /> 
                 </div>
                 <div>
                     <span className="icons"><PhoneOutlined /></span>
                     <input type="number" required placeholder="Number" />

                 </div>
                 <div>
                     <span className="icons"><MailOutlined /></span>
                     <input type="email" required placeholder="Email"  />

                 </div>
                 <div>
                      <span className="icons"><EyeOutlined /></span>
                     <input type="password" required placeholder="Password" />
                     
                 </div>
                 <div className="btn-su">
                 {/* <Button variant="outline-success" >Success</Button> */}
                    <button>
                         <span style={{fontWeight:"700",color:"#fff"}}>
                         Sign Up

                        </span>
                     </button>
                 </div>
                 <div className="">
                            <p style={{color:"#024F9D",fontWeight:600,cursor:"pointer"}} onClick={toggle}>
                                Already have an account? Login
                            </p>
                </div>
             </div>
         </div>}

        </div>
    );
}

export default UserCredentials;



// <div className="Main">
        //     <ToastContainer
        //         position="bottom-right"
        //         theme="colored"
        //         autoClose={3000} />
        //     {
        //         togglestate ?
        //             <div className="login">
        //                 <div className="row">
        //                     <div className="col"></div>
        //                     <div className="col-md-6">
        //                         <div className="loginform">
        //                             <Form
        //                                 name="basic"
        //                                 labelCol={{
        //                                     span: 8,
        //                                 }}
        //                                 wrapperCol={{
        //                                     span: 16,
        //                                 }}
        //                                 style={{
        //                                     maxWidth: 900,
        //                                 }}
        //                                 initialValues={{
        //                                     remember: true,
        //                                 }}
        //                                 onFinish={Loginuser}
        //                                 onFinishFailed={onFinishFailed}
        //                                 autoComplete="on"
        //                             >
        //                                 <Form.Item
        //                                     label="Email"
        //                                     name="Email"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please input your Email !',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input />
        //                                 </Form.Item>

        //                                 <Form.Item
        //                                     label="Password"
        //                                     name="password"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please input your password!',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input.Password />
        //                                 </Form.Item>
        //                                 <Form.Item
        //                                     wrapperCol={{
        //                                         offset: 8,
        //                                         span: 16,
        //                                     }}
        //                                 >
        //                                     {loader ?
        //                                         <Blocks
        //                                             visible={true}
        //                                             height="50"
        //                                             width="80"
        //                                             ariaLabel="blocks-loading"
        //                                             wrapperStyle={{}}
        //                                             wrapperClass="blocks-wrapper"
        //                                         />
        //                                         :
        //                                         <Button type="primary" htmlType="submit" style={{ backgroundColor: "#B0A4FD" }}>
        //                                             Login
        //                                         </Button>
        //                                     }
        //                                 </Form.Item>
        //                             </Form>
        //                             <div>
        //                                 <p onClick={toggle} style={{ cursor: "pointer", }}>
        //                                     Don't have an account? Register here
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             :
        //             //  signup user 
        //             <div className="signup">
        //                 <div className="row">
        //                     <div className="col"></div>
        //                     <div className="col-md-6">
        //                         <div className="signupform">
        //                             <Form
        //                                 name="basic"
        //                                 labelCol={{
        //                                     span: 8,
        //                                 }}
        //                                 wrapperCol={{
        //                                     span: 16,
        //                                 }}
        //                                 style={{
        //                                     maxWidth: 900,
        //                                 }}
        //                                 initialValues={{
        //                                     remember: true,
        //                                 }}
        //                                 onFinish={Createuser}
        //                                 onFinishFailed={onFinishFailed}
        //                                 autoComplete="on"
        //                             >
        //                                 <div style={{ textAlign: "center", position: "relative" }}>
        //                                     <div style={{ position: "relative", cursor: "pointer" }}>
        //                                         <img src={require("../../assests/images/userprofile.gif")} width={100} height={100} alt="" />
        //                                     </div>
        //                                     <Input type="file" className="img" id="imgae" accept="image/*" />
        //                                 </div>

        //                                 <Form.Item
        //                                     label="UserName"
        //                                     name="UserName"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please input your Name !',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input type="text" />
        //                                 </Form.Item>


        //                                 <Form.Item
        //                                     label="Email"
        //                                     name="Email"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please input your Email !',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input type="email" />
        //                                 </Form.Item>

        //                                 <Form.Item
        //                                     label="Password"
        //                                     name="password"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please input your password!',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input.Password />
        //                                 </Form.Item>
        //                                 <Form.Item
        //                                     label="Confirm Pass"
        //                                     name="ConfirmPass"
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message: 'Please Confirm your password!',
        //                                         },
        //                                     ]}
        //                                 >
        //                                     <Input.Password />
        //                                 </Form.Item>
        //                                 <Form.Item
        //                                     wrapperCol={{
        //                                         offset: 8,
        //                                         span: 16,
        //                                     }}
        //                                 >
        //                                     {loader ?
        //                                         <Blocks
        //                                             visible={true}
        //                                             height="50"
        //                                             width="80"
        //                                             ariaLabel="blocks-loading"
        //                                             wrapperStyle={{}}
        //                                             wrapperClass="blocks-wrapper"
        //                                         />
        //                                         :
        //                                         <Button type="primary" htmlType="submit" style={{ backgroundColor: "#B0A4FD" }}>
        //                                             Signup
        //                                         </Button>
        //                                     }

        //                                 </Form.Item>
        //                             </Form>
        //                             <div>
        //                                 <p onClick={toggle} style={{ cursor: "pointer" }}>
        //                                     Do you have an account? Login
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //     }
        // </div>