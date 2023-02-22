import { mailActions } from "./mail-slice";
export const fetchMailData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://mail-box-client-db-default-rtdb.firebaseio.com/mails.json"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch mails");
      }

      const data = res.json();
      return data;
    };
    try {
        let finalData = await fetchData(); 
        dispatch(mailActions.replaceMail(finalData || []));
    } catch(err) {
        console.log(err);
    }
  };
};
export const sendMailData = (data) => {
  return async () => {
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
    };

    try {
      await sendData();
    } catch (err) {
      console.log(err);
    }
  };
};
