import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendMailData } from "../store/mail-actions";

const Inbox = () => {
  const mails = useSelector((state) => state.mail.mails);
  const email = localStorage.getItem("email");

  return (
    <div>
      {console.log(email)}
      <ListGroup style={{ width: "70rem" }}>
        {mails.map((mail) => {
          if (mail.to === email) {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{mail.subject}</div>
                  {mail.message}
                </div>
              </ListGroup.Item>
            );
          }
        })}

      </ListGroup>
    </div>
  );
};
export default Inbox;
