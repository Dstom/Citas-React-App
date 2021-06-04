import React from 'react'
import { useDispatch } from 'react-redux';
import { campaignStartDelete } from '../../../actions/campaigns';

export const CampaignCard = ({ _id, url, provided, innerRef }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {

        dispatch(campaignStartDelete(id));
    }
    console.log(provided);

    /*col-md-6 col-lg-6 col-xl-3 mb-2 */
    return (
        <div
            className="mb-2"
            ref={innerRef}

            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <div className="card shadow"
                style={{
                    borderRadius: "1rem",
                    height: "200px",
                    width: "200px",
                    overflow: "hidden"
                }}
            >
                <img className="card-img" src={url} alt=""
                    style={{ borderRadius: "1rem" }}
                />
                <div className="card-img-overlay  d-flex align-items-start"
                    style={{ padding: 0 }}>
                    <button
                        className="btn btn-danger shadow-sm ml-auto"
                        onClick={() => handleDelete(_id)}
                    >
                        <i className="fas fa-trash"></i>

                    </button>

                </div>
            </div>
        </div >
    )
}
