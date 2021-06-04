import { types } from '../types/types';

/* 
{
            id: 53534543,
            title: 'Cumpleaeños del jefe',
            user: {
                _id: '234d',
                name: 'Tom'
            }
        }

*/

const initialState = {
    campaigns: [],   
}

export const campaignReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.campaignAddNew:
            return {
                ...state,
                campaigns: [...state.campaigns, action.payload]
            } 
        case types.campaignDeleted:
            return {
                ...state,
                campaigns: state.campaigns.filter(e =>
                    e._id !== action.payload._id
                )
            }

        case types.campaignLoaded:
            return {
                ...state,
                campaigns: [...action.payload]
            }      
        default:
            return state;
    }
}