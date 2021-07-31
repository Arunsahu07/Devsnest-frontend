function toggleThemeReducer(state = false, action) {
    console.log('theme=',state);
    if (action.type === 'toggleTheme')
    {
        return ! state;
    }
    return state;
    
}
export default toggleThemeReducer;