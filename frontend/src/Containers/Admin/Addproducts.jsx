import "./Admin.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
function AddProducts() {
    const [category, setcategory] = useState();
    return (
        <div className="Addproducts">
            <div>
                <Header />
            </div>
            <div className="addheading">
                <h3 >
                    Add New Item
                </h3>
            </div>
            <div className="additemsinputs">
                <div className="eachinputs">
                    <input type="text" placeholder="Item Name" />
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
                    <textarea name="" id="" cols="30" rows="5" className="slectsinputs"></textarea>
                </div>
                <div className="eachinputs">
                    <span style={{ color: "#024F9D", fontWeight: 700 }}>Unit Name: </span>
                    <input type="text" placeholder="Item Name" />
                </div>
                <div className="eachinputs">
                    <span style={{ color: "#024F9D", fontWeight: 700 }}>Unit Name: </span>
                    <input type="text" placeholder="Item Name" />
                </div>
                <div>
                    <button className="addproductbtn">
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