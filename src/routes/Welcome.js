import Compose from "../components/Compose";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMailData } from "../store/mail-actions";
import Inbox from "../components/Inbox";
import Sent from "../components/Sent";
import Navigation from "../components/Navigation";
import { Routes, Route } from "react-router-dom";

const Welcome = () => {
    const mails = useSelector((state)=> state.mail.mails); 
    const dispatch = useDispatch(); 
    console.log(mails);
    useEffect(()=> {
        dispatch(sendMailData(mails)); 
    }, [mails, dispatch])
  return (
    <div>
      <Navigation />
      <div className="d-flex justify-content-center">
        <Routes >
          <Route path="compose" element={<Compose />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="sent" element={<Sent />} />
        </Routes>
        </div>
    </div>
  );
};
export default Welcome;
