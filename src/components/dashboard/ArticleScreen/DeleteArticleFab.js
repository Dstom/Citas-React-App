import React from 'react'
import { useDispatch } from 'react-redux'
import { articleStartDelete } from '../../../actions/articles';

export const DeleteArticleFab = () => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {    
        dispatch(articleStartDelete());
    }

    return (
        <div>
            <button
                className="btn btn-celeste fab-button-danger ml-3"
                onClick= {handleDelete}
            >
                <i className="fas fa-trash">
                   
                </i>
                <span> Borrar articulo</span>
            </button>

        </div>
    )
}
