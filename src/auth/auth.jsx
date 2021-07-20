import { useHistory } from "react-router-dom";
import localStorage from "./localStorage";


const VerifyAuth = () => {
    let history = useHistory();

    if (localStorage.getToken("token")) {


    } else {
        history.push("/user/login");
    }

    return (
        <div>
        </div>
    );
}

const Islogged = () => {

    if (localStorage.getToken("token")) {

    } else {

    }

}


export default VerifyAuth