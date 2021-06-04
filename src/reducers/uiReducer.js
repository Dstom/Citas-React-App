import { types } from "../types/types";

const initialState = {
    toggleSidebar: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiToggleSidebar:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar
            }

        default:
            return state;
    }
}