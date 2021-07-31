

function placeReducer(state='mumbai' , action)
{ 
    if (action.type === "UPDATE_PLACE")
    {
        return action.payload;
    }
    else
    return state;
}
export default placeReducer;