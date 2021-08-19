import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartDetail",
  initialState: [],
  reducers: {
    addItem : (state , action)=>{
      console.log(action.payload)
      let isItemExiest = false;
      const newState = [];
      for(let i=0; i<state.length; i++)
      {
        if ( state[i][0]===action.payload)
        { newState.push([state[i][0],state[i][1]+1])
          isItemExiest = true;
        }
        else
          newState.push(state[i])
      }
      if(isItemExiest)
        return newState
      console.log(action.payload);
      return [...state,[action.payload , 1]]
    },
    decQuantity: (state,action)=>{
      console.log(action.payload);
      const newState = [];
      for(let i=0; i<state.length; i++)
      {
        if (action.payload === state[i][0])
        {
          if(state[i][1] !== 1)
            newState.push([state[i][0] , state[i][1]-1 ]  ) ;
        }
        else
           newState.push(state[i]);
      }
      return newState;
    },
    delItem : (state ,action)=>{
      const newState=[];
      for(let i=0; i< state.length; i++)
      {
        if (state[i][0] !== action.payload)
        newState.push(state[i])
      }
      return newState
    } 
  },
});
console.log(cartSlice.reducer);
export const {addItem, decQuantity , delItem}=cartSlice.actions;
export default cartSlice.reducer;
