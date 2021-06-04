import React from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

import '../dashboard/dashboard.css'
import Roles from '../../config/Roles'
import { useSelector } from 'react-redux'


export const HomeScreen = () => {
    const { rol } = useSelector(state => state.auth);

    
    return (

        <>
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h3>Bienveniedo Username</h3>
                        </div>
                        <div className="col-lg-3">ra</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">

                    {
                        (rol === Roles.admin) ?
                            <>
                                <div className="card-group mb-3">
                                    <div className="card text-center text-white bg-primario">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white" >
                                                <i className="fab fa-slideshare fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Slide</h5>
                                        </div>
                                    </div>

                                    <div className="card text-center text-white bg-grisoscuro">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-cubes fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Articulos</h5>

                                        </div>
                                    </div>

                                    <div className="card text-center text-white bg-celeste">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-images fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Campañas</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-group">
                                    <div className="card text-center text-white bg-naranja">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-video fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Videos Publictarios</h5>

                                        </div>
                                    </div>
                                    <div className="card text-center text-white bg-celesteclaro">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-envelope fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Susscripciones</h5>

                                        </div>
                                    </div>
                                    <div className="card text-center text-white bg-primary">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-laptop-medical fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Citas</h5>

                                        </div>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className="card-group mb-3">
                                    <div className="card text-center text-white bg-primario">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white" >
                                                <i className="far fa-calendar-plus fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Agendar una cita</h5>
                                        </div>
                                    </div>

                                    <div className="card text-center text-white bg-grisoscuro">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="far fa-calendar-times fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Cancelar una cita</h5>

                                        </div>
                                    </div>

                                    <div className="card text-center text-white bg-naranja">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-sync-alt fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Reagendar una cita</h5>
                                        </div>
                                    </div>

                                    <div className="card text-center text-white bg-celeste">
                                        <div className="card-body">
                                            <a href="/#" className="stretched-link text-white">
                                                <i className="fas fa-calendar-check fa-5x py-3"></i>
                                            </a>
                                            <h5 className="card-title">Historial de citas</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }

                </div>
            </section>

        </>
    )
}

