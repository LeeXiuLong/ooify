import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const ModalsReducer = (state = null, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case OPEN_MODAL:
            newState = action.string
            return newState;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default ModalsReducer;