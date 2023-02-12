import axios from "axios";
import { useState,useEffect } from "react";
import './Userscreen.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Blocks } from 'react-loader-spinner'
import {UserAddOutlined ,
    PhoneOutlined,
    MailOutlined ,
    EyeOutlined
}from  '@ant-design/icons'
// import {
//     createUserWithEmailAndPassword,
//     doc, setDoc, db,
//     auth
// } from '../../FirebaseConfig/Firebase.js'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    setDoc,
    getFirestore,
    doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const firebaseConfig = {
    apiKey: "AIzaSyAnnCNWsHUJFze854dWrFbqZE6hvh0pY7s",
    authDomain: "saylani-mart.firebaseapp.com",
    projectId: "saylani-mart",
    storageBucket: "saylani-mart.appspot.com",
    messagingSenderId: "607228020579",
    appId: "1:607228020579:web:d6fd68ad19f55614c47556",
    measurementId: "G-CFGMNNYBW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

        let nametest = /^[A-Za-z .]{3,20}$/
        let emailtest = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
        let passwordtest = /^[a-zA-Z0-9]{6,16}$/;
        let phonetest = /^[0-9]{11}$/;

function UserCredentials() {

    const [togglestate, settogglestate] = useState(false);
    const [loader, setloader] = useState(false);

    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [phonenumber, setphonenumber] = useState();

    const navigate = useNavigate()

     useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user", user);
                console.log("email", user.email);
                if (user.email == "admin@gmail.com") {
                     navigate('/admin')   
                }else{
                    navigate('/user')   

                }
               
            }
        });
    }, [])


    const Loginuser = () => { 
    if((emailtest.test(email))&&(passwordtest.test(password))){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         toast.success("Sign In Successfully !")
         const user = userCredential.user;
         if(user.email == "admin@gmail.com") {
            navigate('/admin')
        }else{
            navigate('/user')
        }
         
        //   console.log("login user .....", user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("login error", errorMessage)
          toast.error("Some thing went wrong!")
        });
    }
    else{
        toast.error("Please fill required input fileds")
    }

    }


    const Createuser = () => {
    console.log(username,email,password,phonenumber)
    if((nametest.test(username)) && (emailtest.test(email)) && (passwordtest.test(password))&&(phonetest.test(phonenumber))){
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up  
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          name: username,
          email: email,
          password:password,
          phonenumber:phonenumber,
          userUid:user.uid
        }) 
        toast.success("Sign Up Successfully !")
        console.log("signup===>", user)
        if(user.email == "admin@gmail.com") {
            navigate('/admin')
        }else{
            navigate('/user')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Something went Wrong!")
        console.log("signup error===>", errorMessage)
      });
  }else{
    toast.error("please fill required input fileds")
  }
}


    const toggle = () => {
        settogglestate(!togglestate)
    }

    return (
  
        <div className="Main">
             <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={3000} />
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
                        <input type="email" required placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}  />
                    </div>
                    <div>
                         <span className="icons"><EyeOutlined /></span>
                        <input type="password" required placeholder="Password"onChange={(e)=>{setpassword(e.target.value)}}   />
                        
                    </div>
                    <div className="btn-su">
                        <button onClick={Loginuser}>
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
                     <input type="text" required placeholder="Full Name" onChange={(e)=>{setusername(e.target.value)}} /> 
                 </div>
                 <div>
                     <span className="icons"><PhoneOutlined /></span>
                     <input type="number" required placeholder="Number"onChange={(e)=>{setphonenumber(e.target.value)}} />

                 </div>
                 <div>
                     <span className="icons"><MailOutlined /></span>
                     <input type="email" required placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />

                 </div>
                 <div>
                      <span className="icons"><EyeOutlined /></span>
                     <input type="password" required placeholder="Password"onChange={(e)=>{setpassword(e.target.value)}} />
                     
                 </div>
                 <div className="btn-su">
                 {/* <Button variant="outline-success" >Success</Button> */}
                    <button onClick={Createuser}>
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