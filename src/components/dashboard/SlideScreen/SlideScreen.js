import React, { useState } from 'react'
import { ImageBox } from './ImageBox';
import './slide.css'
export const SlideScreen = () => {

    const [dragId, setDragId] = useState();
    const [boxes, setBoxes] = useState([
        {
            id: "Box-1",
            color: "red",
            order: 1,
            image: '/images/slide112.jpg'
        },
        {
            id: "Box-2",
            color: "green",
            order: 2,
            image: '/images/slide783.jpg'
        },
        {
            id: "Box-3",
            color: "blue",
            order: 3,
            image: '/images/slide896.jpg'
        },
        {
            id: "Box-4",
            color: "green",
            order: 4,
            image: '/images/slide112.jpg'

        },
        {
            id: "Box-5",
            color: "green",
            order: 5,
            image: '/images/slide112.jpg'
        }
    ]);


    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id);
        console.log(ev.currentTarget.id);
    };

    const handleDrop = (ev) => {
        const dragBox = boxes.find((box) => box.id === dragId);
        const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

        const dragBoxOrder = dragBox.order;
        const dropBoxOrder = dropBox.order;

        const newBoxState = boxes.map((box) => {
            if (box.id === dragId) {
                box.order = dropBoxOrder;
            }
            if (box.id === ev.currentTarget.id) {
                box.order = dragBoxOrder;
            }
            return box;
        });

        setBoxes(newBoxState);
    };

    console.log(boxes);

    return (
        <>

            <section className="images-box-container m-3">
                <section className="container-fluid">
                    <div className="row">
                        {boxes
                            .sort((a, b) => a.order - b.order)
                            .map(box => (
                                <ImageBox
                                    key={box.id}
                                    boxColor={box.color}
                                    boxNumber={box.id}
                                    image={box.image}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}

                                />
                            ))
                        }
                    </div>
                </section>
            </section>

        </>

    )
}
