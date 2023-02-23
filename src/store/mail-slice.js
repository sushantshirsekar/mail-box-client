import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { mails: [] , changed: false},
  reducers: {
    replaceMail(state, action){
        state.mails = action.payload; 
    }, 
    addMail(state, action) {
      const data = action.payload;
      state.mails.push({
        id: data.id,
        subject: data.subject,
        from: data.from,
        message: data.message,
        to: data.to,
        read: data.read, 
      });
      state.changed = true; 
    },
    changeReadStatus(state, action){
      let id = action.payload; 
      state.mails.map((mail)=> {
        if(id === mail.id){
          mail.read = true; 
        }
      })
    },


    deleteMail (state, action){
      const deleteId = action.payload; 
      state.mails = state.mails.filter((mail)=> mail.id !== deleteId); 
    }
  },
});



export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
