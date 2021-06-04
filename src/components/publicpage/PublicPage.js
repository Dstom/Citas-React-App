import React from 'react'
import { Carousel } from './Carousel'

export const PublicPage = () => {
    return (
        <>
            <header className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/#" >
                        <img src="/images/logotipo.png" width="200" alt="" className="d-inline-block align-middle mr-2" />

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/#">La Clinica <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Campañas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Imagenes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/#">Videos y Anuncios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contáctenos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            
            <Carousel />

            <section className="p-5">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <div className="card border-0">
                            <div className="card-body p-5">
                                <div className="row text-center">
                                    <div className="col-lg-3 mb-4 mb-lg-0">
                                        <img className="rounded mx-auto d-block mb-3" src="/images/icono01.png" alt="" width="150" />

                                        <h2 className="h5">Cuidemos de la Deshidratación</h2>
                                        <p className="text-muted text-small mb-0">
                                            La deshidratación ocurre cuando usas o pierdes más líquido del que ingieres,
                                            y tu cuerpo no tiene suficiente agua y otros fluidos para llevar a cabo sus funciones normales.
                                            Si no repones los fluidos que perdiste, te deshidratarás.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 mb-4 mb-lg-0">
                                        <img className="rounded mx-auto d-block mb-3" src="/images/icono02.png" alt="" width="150" />
                                        <h2 className="h5">Prevengamos las Quemaduras Solares</h2>
                                        <p className="text-muted text-small mb-0">
                                            Las quemaduras solares no se notan al momento. Por lo general,
                                            los síntomas comienzan a verse unas cuatro horas después de la exposición al sol;
                                            empeoran entre las 24 y 36 horas y desaparecen entre 3 y 5 días después
                                        </p>
                                    </div>
                                    <div className="col-lg-3 mb-4 mb-lg-0">
                                        <img className="rounded mx-auto d-block mb-3" src="/images/icono03.png" alt="" width="150" />

                                        <h2 className="h5">Prevención del Cáncer</h2>
                                        <p className="text-muted text-small mb-0">
                                            El tabaquismo es el factor de riesgo evitable que por sí solo provoca más muertes por cáncer en todo el mundo,
                                            ya que provoca aproximadamente el 22% de las muertes anuales por esa causa.
                                            En 2004 se atribuyeron al tabaquismo 1,6 millones de los 7,4 millones de muertes por cáncer.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 mb-4 mb-lg-0">
                                        <img className="rounded mx-auto d-block mb-3" src="/images/icono04.png" alt="" width="150" />

                                        <h2 className="h5">Conoce los Beneficios de Nuestra Tarjeta</h2>
                                        <p className="text-muted text-small mb-0">
                                            ¿Quieres obtener beneficios en tus consultas o exámenes médicos?
                                            Te recomendamos usar nuestra Tarjeta Isabel Card
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>



    )
}
