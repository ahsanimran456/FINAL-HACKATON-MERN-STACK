import "./Component.css"
import {
    HomeOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    const gohome = () => {
        navigate("/admin")
    }
    const addproduct = () => {
        navigate("/admin/addproduct")
    }
    return (
        <div className="footer">
            <div className="footerparent"onClick={gohome}>
                <div>
                    <HomeOutlined  />
                </div>
                <div>
                    <span >
                        Home
                    </span>
                </div>
            </div>
            <div className="footerparent" onClick={addproduct}>
                <div>
                    <ShoppingCartOutlined  />
                </div>
                <div>
                    <span>
                        Cart
                    </span>
                </div>
            </div>
            <div className="footerparent">
                <div>
                    <UserOutlined />
                </div>
                <div>
                    <span>
                        Account
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;