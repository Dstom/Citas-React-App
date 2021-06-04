import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articleOpenModal, articleSetActive } from '../../../actions/articles';

export const ArticleCard = ({ _id, title, body, url }) => {

    const dispatch = useDispatch();

    const { activeArticle } = useSelector(state => state.article);

    const onClickCard = () => {
        dispatch(articleSetActive({
            _id,
            title,
            body,
            url
        }));
    }

    const editArticle = () => {
        console.log("Edit");
        dispatch(articleOpenModal());
    }

    return (
        <div className="col-md-6 col-lg-6 col-xl-3 mb-2">
            <summary className={`card shadow ${activeArticle?._id === _id ? 'card-active' : ''}`}
                style={{
                    borderRadius: "1rem"
                }}
                onClick={onClickCard}
            >
                <img className="card-img-top" src={url} alt=""
                    style={{ borderRadius: "1rem 1rem 0 0" }}
                />
                <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="mr-2">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                    </div>

                    <button
                        className="btn btn-transparent shadow-sm"
                        onClick={editArticle}
                    >
                        <i className="far fa-edit"></i>

                    </button>

                </div>
            </summary>
        </div>
    )
}
