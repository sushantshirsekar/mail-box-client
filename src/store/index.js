import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mail-slice";

const store = configureStore({
 reducer: {
    mail: mailSlice
 }   
})

export default store;