import './Component.css'
import {
    PlusOutlined
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import {
    setDoc,
    getFirestore,
    doc,
    getDocs,
    getDoc,
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteField,
    query, where,
    orderBy, db
} from "../FirebaseConfig/Firebase.js";
function Cart() {

    const [data, setdata] = useState([]);
    const dataload = async () => {
        const querySnapshot = await getDocs(collection(db, "Products"));
        const items = []
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
        <div className="cartmain">
            {/* {data && data.map((value, i) => {
                <div className="eachproduct">
                    <div>
                        <img src={require("../assests/images/item4.jpg")} alt="" width={50} height={60} style={{ borderRadius: 7 }} />
                    </div>
                    <div>
                        <div className='cartpriceheader'>
                            <div>
                                <h4>
                                    Meat
                                </h4>
                            </div>
                            <div>
                                850 RS
                            </div>
                        </div>
                        <div>
                            <p>
                                product discription achi hy
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className='addtocart'>
                            <span>
                                <PlusOutlined style={{ fontSize: 20, color: "#fff", fontWeight: 700, marginTop: -5 }} />
                            </span>
                        </button>
                    </div>
                </div>
            })} */}
            <div className="eachproduct">
                <div>
                    <img src={require("../assests/images/item4.jpg")} alt="" width={50} height={60} style={{ borderRadius: 7 }} />
                </div>
                <div>
                    <div className='cartpriceheader'>
                        <div>
                            <h4>
                                Meat
                            </h4>
                        </div>
                        <div>
                            850 RS
                        </div>
                    </div>
                    <div>
                        <p>
                            product discription achi hy
                        </p>
                    </div>
                </div>
                <div>
                    <button className='addtocart'>
                        <span>
                            <PlusOutlined style={{ fontSize: 20, color: "#fff", fontWeight: 700, marginTop: -5 }} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;