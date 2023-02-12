import "./Admin.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { async } from "@firebase/util";
import {
    getAuth,
    doc,
    setDoc,
    db,
    onAuthStateChanged,
    getDocs,
    getDoc,
    collection, auth,
    onSnapshot,
    query, where,
    addDoc,
    orderBy
} from '../../FirebaseConfig/Firebase.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadOutlined from '@ant-design/icons'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

function AddProducts() {
    const [itemname, setitemname] = useState();
    const [category, setcategory] = useState();
    const [description, setdescription] = useState();
    const [unitname, setunitname] = useState();
    const [unitprice, setunitprice] = useState();
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
    }
    const uploadButton = (
        <div className='uplaoder_imag' >
            <UploadOutlined className='camera_icon' />
        </div>
    )

    const addproduct = async () => {
        console.log(itemname, category, description, unitname, unitprice, fileList[0].thumbUrl)
        try {
            await addDoc(collection(db, "Products"), {
                itemname: itemname,
                category: category,
                description: description,
                unitname: unitname,
                unitprice: unitprice,
                productimage: fileList[0].thumbUrl,
                timestamp: new Date(),
            })
             setitemname ("")
             setcategory("")
             setdescription ("")
             setunitname ("")
             setunitprice ("")
            toast.success("Product added successfully")


        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className="Addproducts">
            <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={3000} />
            <div>
                <Header />
            </div>
            <div className="addheading">
                <h3 >
                    Add New Item
                </h3>
            </div>
            <div className="additemsinputs">
                <div>
                    <ImgCrop rotate>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && uploadButton}
                        </Upload>
                    </ImgCrop>
                </div>
                <div className="eachinputs">
                    <input type="text" placeholder="Item Name" onChange={(e) => setitemname(e.target.value)} />
                </div>
                <div className="eachinputs">
                    <select value={category} onChange={(e) => setcategory(e.target.value)} className="slectsinputs" >
                        <option></option>
                        <option >DAIRY. Milk</option>
                        <option >PASTA, RICE, NOODLES, BREAD</option>
                        <option >1 dozen eggs</option>
                        <option >NUTS, SEEDS AND DRIED FRUIT.</option>
                    </select>
                </div>
                <div className="eachinputs">
                    <textarea name="" id="" cols="30" rows="5" className="slectsinputs" onChange={(e) => setdescription(e.target.value)}></textarea>
                </div>
                <div className="eachinputs">
                    <span style={{ color: "#024F9D", fontWeight: 700 }}>Unit Name: </span>
                    <input type="text" placeholder="Unit Name KG/DOZEN" onChange={(e) => setunitname(e.target.value)} />
                </div>
                <div className="eachinputs">
                    <span style={{ color: "#024F9D", fontWeight: 700 }}>Unit Price: </span>
                    <input type="number" placeholder="Price" onChange={(e) => setunitprice(e.target.value)} />
                </div>
                <div>
                    <button className="addproductbtn" onClick={addproduct}>
                        <span>
                            Add Product
                        </span>
                    </button>
                </div>
            </div>
            <div className="footerpos">
                <Footer />
            </div>
        </div>
    );
}

export default AddProducts;