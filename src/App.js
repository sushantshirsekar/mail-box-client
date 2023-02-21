import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./routes/SignUp";
import Welcome from "./routes/Welcome";

const App = () => {
  const nav = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("idToken");
    if (token) {
      nav("/welcome");
    }
  }, [nav]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
};
export default App;
