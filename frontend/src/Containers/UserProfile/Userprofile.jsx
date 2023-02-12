import React from 'react'
import './userprofile.css'
import Cart from '../../Components/Cart'
import {

    ShoppingCartOutlined,
    SearchOutlined
} from '@ant-design/icons'
function Userprofile() {
    return (
        <div className="main-userhome">
            <div className="user-header">
                <div>
                    <h3>
                        SAYLANI WELFARE
                    </h3>
                    <p>
                        DISCOUNT STORE
                    </p>
                </div>
                <div className='cart'>
                    <ShoppingCartOutlined style={{ fontSize: 25, color: "#625f5f" }} />
                </div>
            </div>
            <div className="header-img">
                <img src={require('../../assests/images/item4.jpg')} alt="" />
            </div>
            <div className="header-search">
                <input type="search" /><span><SearchOutlined /></span>
            </div>
            <div className="sliderimg">
                <div>
                    <img src={require("../../assests/images/item3.jpg")} alt="" />
                </div>
                <div>
                    <img src={require("../../assests/images/item2.jpg")} alt="" />
                </div>
                <div>
                    <img src={require("../../assests/images/item3.jpg")} alt="" />
                </div>
                <div>
                    <img src={require("../../assests/images/item5.jpg")} alt="" />
                </div>
            </div>
            <div className="productsshow">
                <Cart/>
            </div>

        </div>
    )
}

export default Userprofile