import { createSlice } from "@reduxjs/toolkit";
{console.log(JSON.parse(localStorage.getItem('mailview')))}
const mailViewSlice = createSlice({
  name: "mail",
  initialState: { mailview: [JSON.parse(localStorage.getItem('mailview'))] || [] },
  reducers: {
    viewMail(state, action) {
      const data = action.payload;
      let exist = state.mailview.find((view)=> view.id === data.id); 
      if(exist){

      }else{
        state.mailview = []; 
        state.mailview.push({
            id: data.id,
            subject: data.subject,
            from: data.from,
            message: data.message,
            to: data.to,
            read: data.read, 
          });
          localStorage.setItem('mailview', JSON.stringify(data));
      }
       
    }



  },
});



export const mailviewActions = mailViewSlice.actions;
export default mailViewSlice.reducer;
