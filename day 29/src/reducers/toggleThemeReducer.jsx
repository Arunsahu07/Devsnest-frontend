function toggleThemeReducer(state = false, action) {
    console.log('theme=',state);
    if (action.type === 'TOGGLE_THEME')
    {
        return ! state;
    }
    return state;
    
}
export default toggleThemeReducer;