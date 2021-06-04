import Swal from "sweetalert2";
import { fetchConToken, fetchConTokenImage } from "../helpers/fetch";
import { types } from "../types/types";

export const articleStartAddNew = (article) => {
    return async (dispatch) => {

        try {
            Swal.fire({ 
                title: 'Cargando...',
                allowOutsideClick: false,
                html:'Porfavor espere'            
            });

            Swal.showLoading();
            const resp = await fetchConTokenImage('articles', article, 'POST');
            const body = await resp.json();

            if (body.ok) {

                const articleToRedux = {
                    _id: body.articuloGuardado._id,
                    title: body.articuloGuardado.title,
                    body: body.articuloGuardado.body,
                    url: body.articuloGuardado.url
                }
                Swal.fire('Realizado !', 'El Artículo ha sido creado con exito', 'success');

                dispatch(articleAddNew(articleToRedux));
            } else {
                // console.log(body.errors);
                let errorsMsg = '';
                Object.entries(body.errors).forEach(error => {
                    errorsMsg += " " + error[1].msg;
                })
                Swal.fire('Error', errorsMsg, 'error');
            }

        } catch (error) {
            console.log("Error: ", error)
        }

    }
}

const articleAddNew = (article) => {
    return {
        type: types.articleAddNew,
        payload: article
    }
}

export const articleSetActive = (article) => {
    return {
        type: types.articleSetActive,
        payload: article
    }
}

export const articleClearActiveArticle = () => {
    return {
        type: types.articleClearActiveArticle
    }
}

export const articleStartUpdate = (article) => {
    return async (dispatch) => {
        try {
            Swal.fire('Cargando porfavor espere...');
            Swal.showLoading();

            const resp = await fetchConTokenImage(`articles/${article._id}`, article, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(articleUpdate({
                    _id: body.articuloActualizado._id,
                    title: body.articuloActualizado.title,
                    body: body.articuloActualizado.body,
                    url: body.articuloActualizado.url
                }));
                Swal.fire('Realizado !', 'El Artículo ha sido actualizado con exito', 'success');


            } else {
                let errorsMsg = '';
                Object.entries(body.errors).forEach(error => {
                    errorsMsg += " " + error[1].msg;
                })
                Swal.fire('Error', errorsMsg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const articleUpdate = (article) => {
    return {
        type: types.articleUpdated,
        payload: article
    }
}


export const articleStartDelete = () => {
    return async (dispatch, getState) => {

        const { _id } = getState().article.activeArticle;
        try {
            const resp = await fetchConToken(`articles/${_id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.ok) {
                dispatch(articleDeleted());
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}
const articleDeleted = () => {
    return {
        type: types.articleDeleted
    }
}

export const articleStartLoading = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchConToken('articles', {}, 'GET');
            const body = await resp.json();

            if (body.ok) {
                const articles = body.articles;
                dispatch(articleLoaded(articles));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const articleLoaded = (articles) => ({
    type: types.articleLoaded,
    payload: articles
})



export const articleOpenModal = () => ({
    type: types.articleOpenModal
})

export const articleCloseModal = () => ({
    type: types.articleCloseModal
})
