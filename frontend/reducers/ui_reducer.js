import { combineReducers } from 'redux';
import ModalsReducer from './modal_reducer';

const UIReducer = combineReducers({
    modal: ModalsReducer,
})

export default UIReducer;