import React from 'react'

export const ImageBox = ({ boxColor, boxNumber, handleDrag, handleDrop, image }) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 box"
            draggable={true}
            id={boxNumber}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}

        >
            <div className="box-image"
                style={{
                    backgroundColor: boxColor,
                    borderColor: boxColor,
                }}
            >
                <img src={image} alt="ias" 
                style={{
                   
                }}

                className="img-fluid"
                
                />                
            </div>

        </div>
    )
}
