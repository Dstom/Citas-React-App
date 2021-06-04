import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './article.css'

import { articleOpenModal, articleSetActive, articleStartLoading } from '../../../actions/articles';

import { ArticleModal } from './ArticleModal'
import { DeleteArticleFab } from './DeleteArticleFab'
import { ArticleCard } from './ArticleCard';

export const ArticleScreen = () => {

    const dispatch = useDispatch();
    const { articles, activeArticle } = useSelector(state => state.article);

    const handleAddClick = () => {
        dispatch(articleOpenModal());
    }
    useEffect(() => {
        dispatch(articleStartLoading());
    }, [dispatch])

    return (
        <>

            <div className="container-fluid">

                <div className="page-article-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <h1 className="h3">Articulos</h1>
                        </div>
                        <div className="col-sm-auto">
                            <button
                                onClick={handleAddClick}
                                className="btn btn-primario rounded-0">
                                <i className="fas fa-plus"></i> Añadir articulo
                            </button>
                        </div>
                    </div>

                </div>


                <div className="row">

                    {
                        articles.map((article) => (
                            <ArticleCard
                                key={article._id}
                                {...article}
                            />
                        ))
                    }

                </div>
            </div>
            <ArticleModal />

            {
                activeArticle && <DeleteArticleFab />
            }
        </>
    )
}

