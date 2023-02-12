import "./Admin.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import Cart from "../../Components/Cart";
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

function Admin() {
    const [data, setdata] = useState([]);

    const dataload = async () => {
        const items = []
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
            console.log(" => ", doc.data());
            items.push(doc.data())
            setdata(items)
            console.log("data", data)
        });
    }
    useEffect(() => {
        dataload()
    }, []);

    return (
        <div className="adminpanel">
            <div>
                <Header />
            </div>
            <div className="adminbody">
                <div className="adminheading">
                    <h3>
                        All Products
                    </h3>
                </div>

                {data && data.map((values, i) => {
                    return (
                        <div className="adminproductsget">
                            <div className="innerproduct">
                                <div>
                                    <img src={values.productimage} alt="" width={80} height={80} style={{ borderRadius: "7px" }} />
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                    <div>
                                        <span>{values.itemname}</span>
                                    </div>
                                    <div>
                                        <span>{values.unitname}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>{values.unitprice} RS</span>
                            </div>
                        </div>

                    )
                })}

                {/* <div className="adminproductsget">
                    <div className="innerproduct">
                        <div>
                            <img src={require("../../assests/images/item3.jpg")} alt="" width={80} height={80} />
                        </div>
                        <div>
                            <div>
                                <span>Apple</span>
                            </div>
                            <div>
                                <span>1kg</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>4$</span>
                    </div>
                </div> */}
                {/* <div className="adminproductsget">
                    <div className="innerproduct">
                        <div>
                            <img src={require("../../assests/images/item3.jpg")} alt="" width={80} height={80} />
                        </div>
                        <div>
                            <div>
                                <span>Dry Milk</span>
                            </div>
                            <div>
                                <span>1kg</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>1$</span>
                    </div>
                </div>
                <div className="adminproductsget">
                    <div className="innerproduct">
                        <div>
                            <img src={require("../../assests/images/item3.jpg")} alt="" width={80} height={80} />
                        </div>
                        <div>
                            <div>
                                <span>Apple</span>
                            </div>
                            <div>
                                <span>1kg</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>4$</span>
                    </div>
                </div>
                <div className="adminproductsget">
                    <div className="innerproduct">
                        <div>
                            <img src={require("../../assests/images/item3.jpg")} alt="" width={80} height={80} />
                        </div>
                        <div>
                            <div>
                                <span>Apple</span>
                            </div>
                            <div>
                                <span>1kg</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>4$</span>
                    </div>
                </div> */}
                <div className="adminfoo">
                    <Footer />
                </div>
            </div>

        </div>
    );
}

export default Admin;