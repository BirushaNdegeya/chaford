import React from "react";
import { Container } from "react-bootstrap";
import banner1 from '../assets/images/presentation1.jpg';
import banner2 from '../assets/images/education.jpg';
import banner3 from '../assets/images/TeachAdult.png';
import teachKid from '../assets/images/TeachKid.png';
// import banner5 from '../assets/images/welcome.jpg';
// import banner6 from '../assets/images/photo1.jpg';

const HomePage = () => {
   return (
      <div className="home">

         {/* step 1 */}

         <div className="homebanner">
            <Container>
               <h1>CHARITY FOR DEVELOPMENT</h1>
               <p className="lead">Generous for a better world</p>
               <p className="lead">Les activités de CHAFORD comprennent l'éducation, la santé et la nutrition, la constructiona de la paix, l'égalité des genres, les urgences, le climat et l'environnement, ainsi que l'évangélisme et le mentorat des enfants et des adultes</p>
            </Container>
         </div>

         {/* step 2 */}

         <section className="container py-5">
            <div className="row d-flex justify-content-between">
               <div className="col-md-6 py-3">
                  <div className="card mb-3 border-0 rounded-0">
                     <div className="my-card" style={{
                        width: '100%',
                        background: '#000'
                     }}>
                        <img src={banner1}  style={{ width: '100%', height: '400px', objectFit: 'cover'}} />
                     </div>
                     <div className="card-body">
                        <h5 className="card-title" style={{ fontWeight: 'bold'}}>Qui sommes Nous ?</h5>
                        <p className="card-text">Un groupe de jeunes bénévoles congolais, basé en RD Congo dans la province du Nord-Kivu, s'engage à promouvoir le développement local dans les pays subsahariens. Nous proposons des services de tutorat aux enfants et aux adultes, tout en apportant assistance aux enfants orphelins et aux réfugiés. Notre engagement inclut la promotion de l'égalité des genres, le soutien à l'entrepreneuriat, au leadership, ainsi que la préparation aux examens nationaux, notamment l'EXETAT et le TENAFP.</p>
                     </div>
                  </div>
               </div>

               <div className="col-md-6">
                  <div className="card mb-3 border-0 rounded-0">
                     <div className="my-card" style={{
                        width: '100%',
                        background: '#000'
                     }}>
                        <img src={teachKid}  style={{ width: '100%', height: '400px', objectFit: 'cover'}} />
                     </div>
                     <div className="card-body">
                        <h5 className="card-title" style={{ fontWeight: '700' }}>Ce que Nous faisons ?</h5>
                        <p className="card-text">Chez CHAFORD, notre mission est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. Vous pouvez soutenir notre programme de tutorat pour les enfants en faisant un don ou en devenant bénévole dès maintenant. Ce programme offre un soutien éducatif crucial aux enfants vulnérables, les aidant à surmonter les obstacles académiques et favorisant leur réussite scolaire et leur développement personnel. Rejoignez-nous dans cette noble cause pour transformer la vie des enfants en Afrique subsaharienne grâce à l'éducation.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* end presentation */}

         
         <section className="container py-5">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                     <img src={banner2} className="d-block w-100" alt="..." />
                     <div className="carousel-caption d-none d-md-block">
                     <h5>Education</h5>
                     <p>L'education est plus importante.</p>
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                     <img src={banner3} className="d-block w-100" alt="..." />
                     <div className="carousel-caption d-none d-md-block">
                     <h5>Second slide label</h5>
                     <p>Some representative placeholder content for the second slide.</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img src={banner1} className="d-block w-100" alt="..." />
                     <div className="carousel-caption d-none d-md-block">
                     <h5>Nos activites humanitaires</h5>
                     <p>Certains moments on organise des activites pour aider les jeunes gens vulnérables.</p>
                     </div>
                  </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Precedent</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Suivant</span>
                  </button>
               </div>
            </section>
      </div>
   );
};

export default HomePage;