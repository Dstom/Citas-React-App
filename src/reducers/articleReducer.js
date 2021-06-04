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
    articles: [],
    activeArticle: null,
    articleModal: false
}

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.articleSetActive:
            return {
                ...state,
                activeArticle: action.payload
            }
        case types.articleAddNew:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        case types.articleClearActiveArticle:
            return {
                ...state,
                activeArticle: null
            }
        case types.articleUpdated:
            return {
                ...state,
                articles: state.articles.map(e =>
                    e._id === action.payload._id ? action.payload : e
                )
            }

        case types.articleDeleted:
            return {
                ...state,
                articles: state.articles.filter(e =>
                    e._id !== state.activeArticle._id
                ),
                activeArticle: null
            }

        case types.articleLoaded:
            return {
                ...state,
                articles: [...action.payload]
            }
        case types.articleOpenModal:
            return {
                ...state,
                articleModal: true
            }
        case types.articleCloseModal:
            return {
                ...state,
                articleModal: false
            }
        default:
            return state;
    }
}