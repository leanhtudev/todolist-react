let initialState= null
const EditedTask = (state=initialState, action)=>{
    switch(action.type){
        case 'EDIT_TASK':
            state=action.task;
            return {...state};
           
        default:  return {...state};
    }
}
export default EditedTask;