import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { mailActions } from "../store/mail-slice";
import { mailviewActions } from "../store/mailview-slice";
import MailView from "./MailView";

const Inbox = () => {
  let mails = useSelector((state) => state.mail.mails);
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const nav = useNavigate();
  if (mails === null) {
    mails = [];
  }
  const emailOpenHandler = (data, id) => {
    console.log(data);
    dispatch(mailviewActions.viewMail(data));
    dispatch(mailActions.changeReadStatus(id));
    console.log(mails);
    nav("/welcome/view");
  };

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(mailActions.deleteMail(id));
  };
  return (
    <div>
      {console.log(email)}
      {
        <ListGroup style={{ width: "70rem", cursor: "pointer" }}>
          {mails.map((mail) => {
            if (mail.to === email) {
              if (mail.read === false) {
                return (
                  <div className="d-flex" style={{background: 'lightgrey'}}>
                    <ListGroup.Item
                      style={{background: 'lightgrey',width:'60rem', border:'none'}}

                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      onClick={() => emailOpenHandler(mail, mail.id)}
                    >
                      <div
                        className="m-3"
                        style={{
                          color: "blue",
                          background: "blue",
                          border: "1px solid blue",
                          borderRadius: "1000px",
                          height: "9px",
                          width: "7px",
                        }}
                      ></div>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Subject: {mail.subject}</div>
                        From: {mail.from}
                      </div>
                    </ListGroup.Item>
                    <div>
                      <Button
                        onClick={() => deleteHandler(mail.id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="d-flex">
                    <ListGroup.Item
                      style={{width:'60rem', border:'none'}}
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      onClick={() => emailOpenHandler(mail, mail.id)}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Subject: {mail.subject}</div>
                        From: {mail.from}
                      </div>
                    </ListGroup.Item>
                    <div>
                      <Button
                        onClick={() => deleteHandler(mail.id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              }
            }
          })}
        </ListGroup>
      }
    </div>
  );
};
export default Inbox;
