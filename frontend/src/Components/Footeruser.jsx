import "./Component.css"
import {
    HomeOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
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
    orderBy,
    signOut
} from '../FirebaseConfig/Firebase.js'
function Footeruser() {

    
    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    const navigate = useNavigate()

    const gohome = () => {
        // navigate("/admin")
    }
    const addproduct = () => {
        // navigate("/admin/addproduct")
    }
    return (
        <div className="footer">
            <div className="footerparent" onClick={gohome}>
                <div>
                    <HomeOutlined />
                </div>
                <div>
                    <span >
                        Home
                    </span>
                </div>
            </div>
            <div className="footerparent" onClick={addproduct}>
                <div>
                    <ShoppingCartOutlined />
                </div>
                <div>
                    <span>
                        Cart
                    </span>
                </div>
            </div>
            <div className="footerparent" onClick={logout}>
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

export default Footeruser