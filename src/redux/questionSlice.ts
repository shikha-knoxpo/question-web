import { createSlice } from "@reduxjs/toolkit";
import { Questionaire } from "./model";

const initialState = {
    title: "New Questionaire",
    list: [],
  } as Questionaire;

export const questionListSlice = createSlice({
  name: "questionListSlice",
  initialState,
  reducers: {
    setTitle:(state,action)=>{
        state.title=action.payload;
        console.log(action.payload);
        console.log(state.title);


    }

  },
});

export const {setTitle} = questionListSlice.actions;
export default questionListSlice.reducer;
