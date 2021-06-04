import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";


export const startLogin = (email, password) => {
    return async (dispatch) => {


        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());



            let path = body.avatar;
            let urlW30 = path.replace(/\/upload\//, '/upload/c_scale,w_30,h_30/');

            console.log(urlW30);
            dispatch(login({
                uid: body.uid,
                name: body.name,
                rol: body.rol,
                avatar: urlW30
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('auth/renew', {});
        const body = await resp.json();


        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            let path = body.avatar;
            let urlW30 = path.replace(/\/upload\//, '/upload/c_scale,w_30,h_30/');

            dispatch(login({
                uid: body.uid,
                name: body.name,
                rol: body.rol,
                avatar: urlW30
            }))
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return (dispatch) => {

        localStorage.clear();

        dispatch(logout());

    }
}

const logout = () => ({ type: types.authLogout })

