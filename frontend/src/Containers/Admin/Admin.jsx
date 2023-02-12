import "./Admin.css"
import Header from "../../Components/Header";
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

    const dataload = async() => {
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(" => ", doc.data());
            setdata(doc.data())
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
            </div>

        </div>
    );
}

export default Admin;