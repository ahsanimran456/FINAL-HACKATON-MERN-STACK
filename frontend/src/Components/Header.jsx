import {
    MenuUnfoldOutlined
} from '@ant-design/icons'
import "./Component.css"
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
function Header() {
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
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
                <MenuUnfoldOutlined onClick={logout} />
            </div>
        </div>
    );
}

export default Header;