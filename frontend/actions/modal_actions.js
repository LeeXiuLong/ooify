export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (string) => {
    return{
        type: OPEN_MODAL,
        string
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}