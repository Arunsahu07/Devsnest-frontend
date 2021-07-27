const initialVal={firstName:'',lastName:''};
export const inputReducer=(state=initialVal,action)=>{
    switch(action.type){
        case "FIRST_NAME":
            return {...state,firstName:action.firstName};
        case "LAST_NAME":
            return {...state,lastName:action.lastName};
        default:
            return state;
    }
    
}