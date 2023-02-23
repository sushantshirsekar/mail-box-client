import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mailviewActions } from "../store/mailview-slice";

const Logout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(mailviewActions.reset()); 
    nav("/");
  };
  return (
    <Button onClick={logoutHandler} variant="secondary mx-5 ">
      Logout
    </Button>
  );
};
export default Logout;
