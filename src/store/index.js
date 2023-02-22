import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mail-slice";
import mailviewSlice from "./mailview-slice";

const store = configureStore({
 reducer: {
    mail: mailSlice, 
    mailview: mailviewSlice
 }   
})

export default store;