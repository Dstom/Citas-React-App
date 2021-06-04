import React, { useMemo, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { campaignStartAddNew, campaignStartLoading, campaignLoaded } from '../../../actions/campaigns';
import { CampaignCard } from './CampaignCard';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
});

export const CampaignScreen = () => {

    const dispatch = useDispatch();
    const { campaigns } = useSelector(state => state.campaign);

    const [items, setitems] = useState(getItems(10));

    const [dragId, setDragId] = useState();



    const [files, setFiles] = useState([]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);


    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        dispatch(campaignStartLoading());
    }, [dispatch])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(files[0]);

        dispatch(campaignStartAddNew({ image: files[0] }));
        setFiles([]);
    }
    const handleOnDragEnd = (result) => {
        console.log(result)

        if (!result.destination) {
            return;
        }

        const campaignsOrdered = reorder(
            campaigns,
            result.source.index,
            result.destination.index
        )

        dispatch(campaignLoaded(campaignsOrdered));
    }


    return (
        <section className="">
            <div className="container-fluid">
                <form
                    onSubmit={handleSubmitForm}
                >

                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        <p>Arrastre la imagen aca, o haga para click para Seleccionar</p>
                    </div>

                    <aside style={thumbsContainer}>
                        {thumbs}
                    </aside>
                    {
                        files.length > 0 ?
                            <button
                                type="submit"
                                className="btn btn-primario rounded-0">
                                Subir imagen
                            </button> :
                            ''
                    }
                </form>
            </div>

            <div className="container-fluid mt-3">
                <DragDropContext
                    onDragEnd={handleOnDragEnd}
                >
                    <Droppable
                        droppableId="campaigns"
                        direction="horizontal"
                    >

                        {provided => (
                            <div className="d-flex"
                                style={{
                                    border: "4px dashed",
                                    overflow: "auto"
                                }}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >


                                {campaigns
                                    .map((campaign, index) => (
                                        <Draggable
                                            key={campaign._id}
                                            draggableId={campaign._id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <CampaignCard
                                                    innerRef={provided.innerRef}
                                                    provided={provided}

                                                    {...campaign}
                                                />
                                            )}

                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}





                            </div>
                        )}
                    </Droppable>
                </DragDropContext>




            </div>
        </section>
    );
}
