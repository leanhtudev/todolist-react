import { combineReducers } from 'redux';
import Tasks from './taskReducer';
import UpdateStatus from './updateStatus';
import EditTask from './editTask';
import Filter from './filter';
const MyReducer = combineReducers(
    //state 
    {
    TaskList: Tasks,
    editStatus: UpdateStatus,
    editTask:EditTask,
    filter:Filter
    }
)
export default MyReducer;