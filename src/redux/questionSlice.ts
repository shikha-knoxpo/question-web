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
    setTitle: (state, action) => {
      state.title = action.payload;
     },
    addQA: (state, action) => {
      state.list = [
        ...state.list,
        {
          id: new Date().toISOString(),
          question: action.payload.question,
          answer: action.payload.answer,
        },
      ];
     },
     reOrderQAUp:(state,action )=>{
      if(action.payload !== 0){
        const temp = state.list[action.payload];
      state.list[action.payload ] =state.list[action.payload - 1];
      state.list[action.payload -1 ]=temp;
      }
      
     },
     reOderQADown: (state,action) =>{
      if(action.payload+1 !== state.list.length){const temp = state.list[action.payload];
        state.list[action.payload ] =state.list[action.payload + 1];
        state.list[action.payload + 1 ]=temp;}
      
     },
     delQA:(state,action) =>{
        state.list=state.list.filter((e:any)=>e.id !== action.payload)
     }
  },
});

export const { setTitle, addQA,delQA,reOderQADown,reOrderQAUp } = questionListSlice.actions;
export default questionListSlice.reducer;
