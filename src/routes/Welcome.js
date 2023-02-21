import Compose from "../components/Compose";
import Logout from "../components/Logout";

const Welcome = () => {
  return (
    <div>
      <div
        style={{ borderBottom: "1px solid black" }}
        className="d-flex justify-content-end"
      >
        <h1 className="text-center p-3 px-5 mx-5">Welcome to Mailbox Client</h1>
        <div className="py-4 mx-5 px-5">
          <Logout />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3" >
        <Compose />
      </div>
    </div>
  );
};
export default Welcome;
