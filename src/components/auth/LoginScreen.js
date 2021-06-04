import React from 'react'
import { startLogin } from '../../actions/auth';
import './login.css'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: 'asddf@gmail.com',
        password: '123456'
    });

    const { email, password } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
        //*  console.log(email, password);
        //   localhost:4000/api/auth
    }

    return (
        <div className="d-flex align-items-center text-center" style={{ height: "100vh" }}>
            <form className="form-signin" onSubmit={handleLogin}>
                <img className="mb-4" src="/images/logotipo.png" alt="" height="72" width="300" />
                <h1 className="h3 mb-3 font-weight-normal">Ingreso al Panel de Control</h1>

                <input
                    type="text"
                    id="inputEmail"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={handleLoginInputChange}
                />
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleLoginInputChange}

                />

                <button className="btn btn-lg btn-primary btn-block rounded-0" type="submit">Ingresar</button>
            </form>
        </div>
    )
}
