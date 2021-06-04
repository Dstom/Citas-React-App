import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { uiToggleSidebar } from '../../actions/ui';

export const TopBar = () => {


    const { name, avatar } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const toogleSidebar = ()=>{
        dispatch(uiToggleSidebar());
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-lightu border-bottom">



            <span className="navbar-brand mb-0 h1">
                <span className="btn btn-sm btn-primario shadow-sm mr-1" 
                    onClick={toogleSidebar}
                >
                    <i className="fas fa-bars fa-sm"></i>
                </span> 
                 Dia, Fecha
                hora
            </span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item d-flex align-items-center">
                        <a className="nav-link " href="/#">
                            <i className="far fa-envelope fa-lg"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={avatar} alt="Avatar" className="img-fuid rounded-circle mr-2 avatar" />
                            {name}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/#">Mi perfil</a>
                            <div className="dropdown-divider"></div>
                            <button
                                className="dropdown-item"
                                type="button"
                                onClick={handleLogout}>Cerrar Sesión
                            </button>
                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav" id="navbar-menu">
                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-home mr-2 lead"></i> Inicio</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fab fa-slideshare mr-2 lead"></i> Slide</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-cubes mr-2 lead"></i>Articulos</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-images mr-2 lead"></i> Campañas</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-video mr-2 lead"></i> Spots</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-laptop-medical mr-2 lead"></i> Reservas de Citas</a>
                    </li>

                    <li className="nav-item">
                        <a href="/#" className="nav-link"><i className="fas fa-envelope mr-2 lead"></i> Suscriptores</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
