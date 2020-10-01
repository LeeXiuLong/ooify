import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const ModalsReducer = (state = {type: null, song:null,}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case OPEN_MODAL:
            newState = action.object
            return newState;
        case CLOSE_MODAL:
            newState = {
                type: null,
                song: null,
            };
            return newState;
        default:
            return state;
    }
}

export default ModalsReducer;