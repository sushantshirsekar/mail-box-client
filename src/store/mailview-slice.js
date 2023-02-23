import { createSlice } from "@reduxjs/toolkit";

const mailViewSlice = createSlice({
  name: "mail",
  initialState: {
    mailview: [JSON.parse(localStorage.getItem("mailview"))] || [],
    sentview: [JSON.parse(localStorage.getItem("sentview"))] || [],
  },
  reducers: {
    reset(state){
      state.mailview = []; 
      state.sentview = [];
    }, 

    viewMail(state, action) {
      const data = action.payload;
      console.log(data.id);
      let exist = state.mailview.find((view) => view.id === data.id);
      if (exist) {
      } else {
        state.mailview = [];
        state.mailview.push({
          id: data.id,
          subject: data.subject,
          from: data.from,
          message: data.message,
          to: data.to,
          read: data.read,
        });
        localStorage.setItem("mailview", JSON.stringify(data));
      }
    },

    sentView(state, action) {
      const sentData = action.payload;
      console.log(sentData.id);
      console.log(state.sentview);
      let existing = state.sentview.find((sent) => sent.id === sentData.id);
      if (existing) {
      } else {
        state.sentview = [];
        state.sentview.push({
          id: sentData.id,
          subject: sentData.subject,
          from: sentData.from,
          message: sentData.message,
          to: sentData.to,
          read: sentData.read,
        });
        localStorage.setItem("sentview", JSON.stringify(sentData));
      }
    },
  },
});

export const mailviewActions = mailViewSlice.actions;
export default mailViewSlice.reducer;
