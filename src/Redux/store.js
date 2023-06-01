import { createStore } from 'redux';
import { userReducer} from './users/userReducers' 
export const store = createStore(userReducer);