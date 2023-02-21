import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const nav = useNavigate(); 
    const logoutHandler = () => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('email');
        nav('/');
    }
  return <Button onClick={logoutHandler} variant="secondary mx-5 ">Logout</Button>;
};
export default Logout;
