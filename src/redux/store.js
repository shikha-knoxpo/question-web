import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";

export default configureStore({
    reducer:{qList:questionSlice}
})