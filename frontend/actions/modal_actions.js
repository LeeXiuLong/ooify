export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (object) => {
    return{
        type: OPEN_MODAL,
        object
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}