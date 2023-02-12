import "./Component.css"
import {
    HomeOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons'
function Footer() {
    return (
        <div className="footer">
            <div className="footerparent">
                <div>
                    <HomeOutlined />
                </div>
                <div>
                    <span>
                        Home
                    </span>
                </div>
            </div>
            <div className="footerparent">
                <div>
                    <ShoppingCartOutlined />
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