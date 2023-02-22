import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [login, showlogin] = useState(true);
  const nav = useNavigate();

  const switchStatus = () => {
    showlogin((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let enteredEmail = emailRef.current.value;
    let enteredPassword = passwordRef.current.value;

    if (!login) {
      let enteredConfirm = confirmPasswordRef.current.value;
      if (
        enteredEmail === "" ||
        enteredPassword === "" ||
        enteredConfirm === ""
      ) {
        alert("Please enter all details");
        return;
      }
      if (enteredConfirm !== enteredPassword) {
        alert("Password and Confirm Password does not match");
        return;
      }
    }
    if (enteredEmail === "" || enteredPassword === "") {
      alert("Please enter all details");
      return;
    }

    if (login) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArkdoKeu7aXexY8yB9nS4u0bSF2J3mugs",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Login Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.idToken);
          console.log(data.email);
          localStorage.setItem('email', data.email); 
          localStorage.setItem('idToken', data.idToken);
          console.log("Logged in successfully!");
          nav("/welcome");
        })
        .catch((err) => console.log(err));
    } else if (!login) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArkdoKeu7aXexY8yB9nS4u0bSF2J3mugs",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Login Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          alert(
            "User Registered Successfully please login with the same details"
          );
          switchStatus();
        })
        .catch((err) => alert(err));


        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="text-center m-2">Sign Up</h1>

        <Form
          onSubmit={submitHandler}
          style={{ width: "500px", border: "1px solid black" }}
          className="text-center mt-3"
        >
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              ref={emailRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
            ></Form.Control>
          </Form.Group>
          {!login && (
            <Form.Group className="m-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              ></Form.Control>
            </Form.Group>
          )}

          <Button
            onClick={switchStatus}
            className="bg-transparent border-none"
            style={{ color: "blue", border: "none" }}
          >
            {login ? "Create Account" : "Log into existing Account"}
          </Button>
          <br />
          <Button className="mb-3" variant="secondary" type="submit">
            {login ? "Signin" : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
