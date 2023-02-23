import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mailviewActions } from "../store/mailview-slice";

const Sent = () => {
  let mails = useSelector((state) => state.mail.mails);
  const email = localStorage.getItem("email");
  const dispatch = useDispatch(); 
  const nav = useNavigate(); 
  if (mails === null) {
    mails = [];
  }
  const sentMailHandler = (data, id)=> {
    console.log(data);
    console.log(id);
    dispatch(mailviewActions.sentView(data)); 
    nav("/welcome/sentview"); 
  }
  return (
    <div>
      <ListGroup
        style={{ maxWidth: "100%", width: "70rem", cursor: "pointer" }}
      >
        {mails.map((mail) => {
          if (mail.from === email) {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={()=> sentMailHandler(mail, mail.id)}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subject: {mail.subject}</div>
                  To: {mail.to}
                </div>
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </div>
  );
};
export default Sent;
