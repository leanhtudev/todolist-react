let initialState = false;

const UpdateStatus =(state = initialState,action)=>{
    switch(action.type){
        case 'OPEN_MODAL':
         state=action.status;
         return state;
         case 'OPEN_UPDATE_MODAL':
         
         break;
         default: return state;
    }
}
export default UpdateStatus;
