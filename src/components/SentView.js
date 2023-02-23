import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SentView = () => {
  const nav = useNavigate();
  const maildisplay = useSelector((state) => state.mailview.sentview);
  const navtoInbox = () => {
    nav("/welcome/sent");
  };
  return (
    <div>
      <div >
        <div className="d-flex justify-content-center">
        <Button className="m-2 text-center" onClick={navtoInbox}>
          back
        </Button>
        </div>
        <div>
          <Card style={{ width: "80rem" }}>
            {maildisplay.map((mail) => {
              return (
                <Card.Body>
                  <Card.Title>Subject: {mail.subject}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    To: {mail.to}
                  </Card.Subtitle>
                  <Card.Text>Message: {mail.message}</Card.Text>
                </Card.Body>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SentView;
