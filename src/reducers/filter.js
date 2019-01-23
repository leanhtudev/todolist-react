let initialState = {
    filterType: 'a',
    filterValue: 'b'
}
const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'LABEL':
            state.filterType = action.filterType;
            state.filterValue = action.filterValue;
            return { ...state };
        case 'PRIORITY':
            state.filterType = action.filterType;
            state.filterValue = action.filterValue;
            return { ...state };
        case 'PROGRESS':
            state.filterType = action.filterType;
            state.filterValue = action.filterValue;
            return { ...state };
        default: return { ...state };
    }
}
export default filter;