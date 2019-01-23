import {TasksData} from './../data/taskData';
var task = JSON.parse(localStorage.getItem('TaskData'));
         
let initialState=task? task : TasksData;

let taskReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'GET_TASK_LIST':
        
        return [...state];
        case 'DELETE_TASK':
            for(let i in state){
                if(state[i].id===action.id){
                    state.splice(i,1)
                }
            }
            localStorage.setItem('TaskData',JSON.stringify(state));
            return [...state];
        case 'UPDATE_TASK':
        task = [...state];
        for(let i in state){
            if(state[i].id===action.task.id){
                state[i] ={...action.task}
            }
        }
        localStorage.setItem('TaskData',JSON.stringify(state));
        return [...state];

        case 'ADD_TASK': 
        state=[...state,action.task];
        
        localStorage.setItem('TaskData', JSON.stringify(state));
        return [...state];
        default: return [...state];
    }
}
export default taskReducer;