import Logout from "../components/Logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
    {props.children}
      <div
        style={{ borderBottom: "1px solid black" }}
        className="d-flex justify-content-end"
      >
        <h1 className="text-center p-3 px-5 mx-5">Welcome to Mailbox Client</h1>
        <div className="py-4 mx-5 px-5">
          <Logout />
        </div>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="inbox" className="mx-5 py-2" style={{textDecoration:'none', color:'black'}}>
                Inbox
              </NavLink>
              <NavLink to="compose"  className="mx-5 py-2" style={{textDecoration:'none', color:'black'}}>
                Compose
              </NavLink>
              <NavLink to="sent" className="mx-5 py-2" style={{textDecoration:'none', color:'black'}}>
                Sent
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
