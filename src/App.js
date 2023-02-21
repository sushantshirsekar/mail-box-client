import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./routes/SignUp";
import Welcome from "./routes/Welcome";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/welcome/*" element={<Welcome />}>
          </Route>
        </Routes>
    </>
  );
};
export default App;
