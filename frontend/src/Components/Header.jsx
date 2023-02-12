import {
    MenuUnfoldOutlined
} from '@ant-design/icons'
import "./Component.css"
function Header() {
    return (
        <div className="everyheader">
            <div className='everymain'>
                <div>
                    <img src={require("../assests/images/item6.jpg")} alt="" width={50} height={50} />
                </div>
                <div>
                    <h3>
                        <h4>
                            Mr.Admin
                        </h4>
                    </h3>
                </div>
            </div>
            <div>
                <MenuUnfoldOutlined />
            </div>
        </div>
    );
}

export default Header;