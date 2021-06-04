import React, { useEffect, useRef, useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { articleCloseModal, articleClearActiveArticle, articleStartUpdate, articleStartAddNew } from '../../../actions/articles';
import { dataURLtoFile, toDataURL } from '../../../helpers/urlToFile';
import './article.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

ReactModal.setAppElement('#root');


const initArticle = {
    title: '',
    body: '',
    url: '',
    imgTitlePreview: 'Seleccionar Archivo',
    image: ''
}




export const ArticleModal = () => {

    const dispatch = useDispatch();

    const { articleModal, activeArticle } = useSelector(state => state.article);

    const [formValues, setFormValues] = useState(initArticle);

    const { title, body, url, imgTitlePreview, image } = formValues;

    useEffect(() => {
        if (activeArticle) {
            //     setFormValues(activeArticle);

            toDataURL(activeArticle.url)
                .then(dataUrl => {
                    let fileData = dataURLtoFile(dataUrl, "imageName.jpg");
                    setFormValues({
                        ...activeArticle,
                        image: fileData
                    })
                    // setimage(fileData);
                })
        }
        else {
            setFormValues(initArticle);
        }
    }, [activeArticle])

    const onHandleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })

    }
    const closeModal = () => {

        dispatch(articleCloseModal());
        dispatch(articleClearActiveArticle());
        setFormValues(initArticle);

        /*  setimage(null)
        
          setImgTitlePreview("Seleccionar Archivo");*/
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("formva", formValues);


        //TODOs realizar grabación
        if (activeArticle) {
            dispatch(articleStartUpdate({
                _id: formValues._id,
                title: formValues.title,
                body: formValues.body,
                image: formValues.image

            }));
        } else {
            console.log('Adding');
            dispatch(articleStartAddNew({
                title: formValues.title,
                body: formValues.body,
                image: formValues.image
            }));
        }

        closeModal();
    }

    const handleChangeFile = (e) => {
        console.log(e.target.files);

        let fileName = e.target.files[0].name;

        setFormValues({
            ...formValues,
            imgTitlePreview: fileName,
            image: e.target.files[0]
        })

        /*    setImgTitlePreview(fileName);
           setimage(e.target.files[0]);*/
    }
    return (
        <ReactModal
            isOpen={articleModal}
            //onAfterOpen={}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >

            <h1> {activeArticle ? "Editar Articulo" : "Nuevo Articulo"} </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >
                <div className="form-group">
                    <label>Titulo </label>
                    <input
                        type="text"
                        className={`form-control`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={onHandleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Contenido"
                        rows="5"
                        name="body"
                        value={body}
                        onChange={onHandleInputChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <div className="custom-file">
                        <input
                            type="file" className="custom-file-input" id="customFile" onChange={handleChangeFile} />
                        <label className="custom-file-label" htmlFor="customFile" data-browse="Elegir">
                            {imgTitlePreview}
                        </label>
                    </div>
                    <div className="d-flex">
                        {
                            (!image) ?
                                <div className="mx-auto">Escoga una imagen para subir </div> :
                                <img
                                    src={URL.createObjectURL(image)}
                                    id="previewImage"
                                    className="img-thumbnail mx-auto" />
                        }

                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>



        </ReactModal>
    )
}
