import { combineReducers } from 'redux';
import ModalsReducer from './modal_reducer';
import PlaybarReducer from './playbar_reducer';

const UIReducer = combineReducers({
    modal: ModalsReducer,
    playbar: PlaybarReducer,
})

export default UIReducer;