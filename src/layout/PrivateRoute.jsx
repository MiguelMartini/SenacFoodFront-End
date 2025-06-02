import { jwtDecode } from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

// decodigica o token
const isTokenValid = (token) => {
    try{
        const decode = jwtDecode(token);
        return decode.exp * 1000 > Date.now();
    }catch{
        return false;
    }
};


const PrivateRoute = () => {
    // procura o token no localStorage
    const token = localStorage.getItem("token");

    // valida se o token é válido ou não
    if(!token || !isTokenValid(token)){
        return <Navigate to="/login"/>
    }
    return <Outlet/>
}

export default PrivateRoute;