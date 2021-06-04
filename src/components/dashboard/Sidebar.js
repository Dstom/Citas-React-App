import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Roles from '../../config/Roles';


export const Sidebar = ({ rol }) => {

    const { toggleSidebar } = useSelector(state => state.ui);
    return (
        <div className={`sidebar-container${toggleSidebar === true ? '-collapsed' : ''} bg-primario`}>
            <div className="logo">
                <h4 className="text-light font-weight-bold">{toggleSidebar === true ? 'Ra|' : 'Raaaaaa|'} </h4>
            </div>
            <div className={`menu ${toggleSidebar === true ? 'text-center' : ''}`}>

                <NavLink to="/" exact className="sidebar-item" activeClassName="sidebar-item-active">
                    <i className="fas fa-home mr-2 lead"></i>
                    <span className={toggleSidebar === true ? 'd-none' : ''}>Inicio</span>
                </NavLink>


                {
                    (rol === Roles.admin) ? <>
                        <NavLink to="/slide" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fab fa-slideshare mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Slide</span>
                        </NavLink>

                        <NavLink to="/articles" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fas fa-cubes mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Articulos</span>
                        </NavLink>

                        <NavLink to="/campaigns" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fas fa-images mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Campañas</span>
                        </NavLink>

                        <NavLink to="/videos" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fas fa-video mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Spots</span>
                        </NavLink>

                        <NavLink to="/citas" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fas fa-laptop-medical mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Reserva de citas</span>
                        </NavLink>

                        <NavLink to="/suscripciones" className="sidebar-item" activeClassName="sidebar-item-active">
                            <i className="fas fa-envelope mr-2 lead"></i>
                            <span className={toggleSidebar === true ? 'd-none' : ''}>Suscripciones</span>
                        </NavLink>
                    </> :

                        <>
                            <NavLink to="/addcita" className="sidebar-item" activeClassName="sidebar-item-active">
                                <i className="far fa-calendar-plus mr-2 lead"></i>
                                <span className={toggleSidebar === true ? 'd-none' : ''}>Agendar una cita</span>
                            </NavLink>

                            <NavLink to="/cancelcita" className="sidebar-item" activeClassName="sidebar-item-active">
                                <i className="far fa-calendar-times mr-2 lead"></i>
                                <span className={toggleSidebar === true ? 'd-none' : ''}>Cancelar una cita</span>
                            </NavLink>

                            <NavLink to="/recita" className="sidebar-item" activeClassName="sidebar-item-active">
                                <i className="fas fa-sync-alt mr-2 lead"></i>
                                <span className={toggleSidebar === true ? 'd-none' : ''}>Reagendar una cita</span>
                            </NavLink>

                            <NavLink to="/historial" className="sidebar-item" activeClassName="sidebar-item-active">
                                <i className="fas fa-calendar-check mr-2 lead"></i>
                                <span className={toggleSidebar === true ? 'd-none' : ''}>Historial de citas</span>
                            </NavLink>
                        </>

                }





            </div>
        </div>
    )
}
