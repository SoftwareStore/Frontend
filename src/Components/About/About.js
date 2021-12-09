import React from 'react';
import './About.css';

export default function App() {
    return (
        <div>

            <section  id="fondo"  >
                <div class="container cuadroinicial" >
                    <div class="row text-center" >
                        <div class="col-sm-12 col-md-12 mb-4">
                            <h3 class="text-center mt-4 font-weight-bold blue-text h1" id="texto1">Acerca de nosotros</h3>
                        </div>
                        <p className="mt-4 mb-5 text-white h5 textoresumen">Somos un grupo de estudiantes de la Universidad Nacional de Ingeniería apasionados
                            por el Desarrollo Web.</p>
                        <p class="mt-4 mb-5 text-white h5" id="texto2" >Somos un grupo de estudiantes de la Universidad Nacional de Ingeniería apasionados
                            por el Desarrollo Web.
                            <br /><br />
                            Nuestra misión es crear aplicaciones webs con las mejores prácticas de desarrollo del mercado
                            con la finalidad de entregar un producto seguro, confiable y de acuerdo a las necesidades del
                            cliente.
                            <br /><br />
                            Nuestra visión es ser uno de los mejores grupos estudiantiles en el Desarrollo Web, con muchos proyectos
                            entregados sin perder la calidad y profesionalismo que nos caracteriza.
                        </p>

                        
                    </div>

                </div>
            </section>
            <section class="bg-light" id="teamMember">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-sm-12 col-md-12 mb-4">
                            <h3 class="text-center mt-4 font-weight-bold blue-text h1">Conoce a nuestro equipo</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="FOTO_1.PNG" class="imagen"  />
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Jorge Luis Cáceres Naupari</h4>
                                <h6 class="font-weight-bold blue-text my-3">Desarrollador</h6>
                                <a target="_blank" href="https://github.com/jorgecaceresn">Github</a>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="imagen"/>
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Hairton Andree Anchi Dueñas</h4>
                                <h6 class="font-weight-bold blue-text my-3">Desarrollador</h6>
                                <a target="_blank" href="https://github.com/andreewD">Github</a>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="imagen" />
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Benedic Miguel Anicama Navarro</h4>
                                <h6 class="font-weight-bold blue-text my-3">Desarrollador</h6>
                                <a target="_blank" href="https://github.com/banicaman">Github</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="imagen" />
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Luis Antonio Rojas Huaroc</h4>
                                <h6 class="font-weight-bold blue-text my-3">Desarrollador</h6>
                                <a target="_blank" href="https://github.com/Luis-Rojas-H">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}