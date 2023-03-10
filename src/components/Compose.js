import { Card, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { sendMailData } from "../store/mail-actions";
import { mailActions } from "../store/mail-slice";

const Compose = () => {
  const dispatch = useDispatch();
  const mails = useSelector((state) => state.mail.mails);
  const emailRef = useRef("");
  const subRef = useRef("");
  const from = localStorage.getItem("email");
 
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const message = convertToHTML(editorState.getCurrentContent());
    let data = {
      id: Date.now(),
      subject: subRef.current.value,
      from: from,
      to: emailRef.current.value,
      message: message,
      read: false, 
    };
    dispatch(mailActions.addMail(data));
    console.log(mails);
    console.log(from);
    emailRef.current.value = ''; 
    subRef.current.value = ''; 
    setEditorState('');
    alert('Email Sent Successfully');
  };

  return (
    <Card style={{ width: "35rem" }} className="mb-3">
      <Card.Title className="text-center m-3">Send Mail</Card.Title>
      <Form className="text-center mb-3" onSubmit={submitHandler}>
        <Form.Group controlId="to" className="px-3 mb-3">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="To:"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="subject" className="px-3 mb-3">
          <Form.Control
            type="text"
            ref={subRef}
            placeholder="Subject:"
          ></Form.Control>
        </Form.Group>
        <Editor
          style={{ outerHeight: "40rem" }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />
        <Button className="text-center" variant="secondary" type="submit">
          Send
        </Button>
      </Form>
    </Card>
  );
};

export default Compose;
