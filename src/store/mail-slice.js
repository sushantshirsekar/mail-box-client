import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { mails: [] },
  reducers: {
    addMail(state, action) {
      const data = action.payload;
      state.mails.push({
        id: data.id,
        subject: data.subject,
        from: data.from,
        message: data.message,
        to: data.to,
      });
      console.log(state.mails);
    },
  },
});



export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
