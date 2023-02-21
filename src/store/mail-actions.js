import { mailActions } from "./mail-slice";

export const sendMailData = (data) => {
    

    return async (dispatch) => {
      const sendData = async () => {
        const res = await fetch(
          `https://mail-box-client-db-default-rtdb.firebaseio.com/mails.json`,
          {
            method: "PUT",
            body: JSON.stringify(data),
          }
        );
  
        if (!res.ok) {
          throw new Error("Sending Failed");
        }
  
        const maildatasend = await res.json();
        return maildatasend;
      };
  
      try {
        let maildata = await sendData();
        console.log(maildata.subject);
        console.log(maildata.id);
      } catch (err) {
        alert(err);
      }
    };
  };
  
