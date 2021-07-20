const storeToken = (token) => {

    if (localStorage.setItem("token", token)) {

        return true;

    } else {
        return false;
    }

}

const getToken = () => {

    const token = localStorage.getItem("token");

    if (token) {
        return token;
    } else {
        return false;
    }

}




export default { storeToken, getToken }