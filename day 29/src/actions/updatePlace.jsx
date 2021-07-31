 function updatePlace(place)
{  
   return {
       type : "UPDATE_PALACE",
       payload : place,
   };
}
function updatePlaceData(placeName) {
    
    return (dispatch)=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=c7ecd36dd16a43828e0102855212907&q=${placeName}`)
    .then(res=>res.json())
    .then(data=>{
    dispatch({
        type : "UPDATE_PLACE_DATA",
        payload : data,
    })}
    )
    }
    
}

function toggleTheme() {
    return {
        type : "TOGGLE_THEME",
    }
    
}

export {updatePlace , updatePlaceData , toggleTheme};