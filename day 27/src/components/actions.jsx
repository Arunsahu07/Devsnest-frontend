function addItem(item)
{
    return {
        type: 'ADD_ITEM',
        payload: item,
    };
}

function removeItem(id)
{
    return {
        type: "REMOVE_ITEM",
        payload: id,
    };
}

function loadTodo()
{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(todos=>{
            console.log(todos);
            return dispatch( {
                type : "LOAD_TODO",
                payload : todos,
            });
        }  );
    }
}


export {removeItem, addItem, loadTodo};