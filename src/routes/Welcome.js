import Compose from "../components/Compose";

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMailData, sendMailData } from "../store/mail-actions";
import Inbox from "../components/Inbox";
import Sent from "../components/Sent";
import Navigation from "../components/Navigation";
import { Routes, Route } from "react-router-dom";
import MailView from "../components/MailView";

let initState = true;

const Welcome = () => {
  const mails = useSelector((state) => state.mail.mails);
  const dispatch = useDispatch();
  console.log(mails);
  useEffect(() => {
    dispatch(fetchMailData()); 
  }, [dispatch]);

  useEffect(() => {
    if (initState) {
      initState = false; 
      return; 
    }
    dispatch(sendMailData(mails));
  }, [mails, dispatch]);

  return (
    <div>
      <Navigation />
      <div className="d-flex justify-content-center">
        <Routes>
          <Route path="compose" element={<Compose />} />
          <Route path="/*" element={<Inbox />} />
          <Route path="sent" element={<Sent />} />
        <Route path="view" element={<MailView />}/>
        </Routes>
      </div>
    </div>
  );
};
export default Welcome;
