import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { authReducer } from "./authReducer";
import { campaignReducer } from "./campaignReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    article: articleReducer,
    campaign: campaignReducer
});