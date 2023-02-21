import { mailActions } from "./mail-slice";

export const sendMailData = (data) => {
    console.log(data.from);
    console.log(data.to);
    let validFrom = '';
    let validTo = ''; 
    for(let i = 0; i < data.from.length; i++){
        if(data.from[i] !== '.' && data.from[i] !== '@'){
            validFrom = validFrom + data.from[i]; 
        }
    }
    for(let i = 0; i < data.to.length; i++){
        if(data.to[i] !== '.' && data.to[i] !== '@'){
            validTo = validTo + data.to[i]; 
        }
    }
    console.log(validFrom);

    return async (dispatch) => {
      const sendData = async () => {
        const res = await fetch(
          `https://mail-box-client-db-default-rtdb.firebaseio.com/${validFrom}.json`,
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
        dispatch(mailActions.addMail({
            id: maildata.id, 
            subject: maildata.subject, 
            from: maildata.from, 
            message: maildata.message, 
            to: maildata.to, 
        }))
        console.log(maildata.id);
      } catch (err) {
        alert(err);
      }
    };
  };
  
