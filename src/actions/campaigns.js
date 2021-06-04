import Swal from "sweetalert2";
import { fetchConToken, fetchConTokenImage } from "../helpers/fetch";
import { types } from "../types/types";

export const campaignStartAddNew = (campaign) => {
    return async (dispatch) => {

        try {
            Swal.fire({
                title: 'Cargando...',
                allowOutsideClick: false,
                html: 'Porfavor espere'
            });

            Swal.showLoading();
            const resp = await fetchConTokenImage('campaigns', campaign, 'POST');
            const body = await resp.json();

            if (body.ok) {
                
                Swal.fire('Realizado !', 'La campaña  ha sido creado con exito', 'success');

                dispatch(campaignAddNew(body.campaignGuardado));
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

const campaignAddNew = (campaign) => {
    return {
        type: types.campaignAddNew,
        payload: campaign
    }
}

export const campaignStartDelete = (_id) => {
    return async (dispatch) => {

        try {

            Swal.fire({
                title: 'Eliminando...',
                allowOutsideClick: false,
                html: 'Porfavor espere'
            });

            const resp = await fetchConToken(`campaigns/${_id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.ok) {
                dispatch(campaignDeleted(_id));
                Swal.fire('Realizado !', "Campaña eliminada exitosamente", 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}
const campaignDeleted = (_id) => {
    return {
        type: types.campaignDeleted,
        payload: {
            _id
        }

    }
}

export const campaignStartLoading = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchConToken('campaigns', {}, 'GET');
            const body = await resp.json();

            if (body.ok) {
                const campaigns = body.campaigns;
                dispatch(campaignLoaded(campaigns));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const campaignLoaded = (campaigns) => ({
    type: types.campaignLoaded,
    payload: campaigns
})