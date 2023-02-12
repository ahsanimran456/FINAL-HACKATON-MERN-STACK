import './Component.css'
import {
    PlusOutlined
} from '@ant-design/icons'
function Cart() {
    return (
        <div className="cartmain">
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
                            <PlusOutlined style={{ fontSize: 20, color: "#fff", fontWeight: 700,marginTop:-5 }} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;