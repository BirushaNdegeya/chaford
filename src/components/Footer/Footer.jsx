import React from "react";
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/icon-facebook.svg';
import instagram from '../../assets/icons/icon-instagram.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import youtube from '../../assets/icons/youtube.svg';

const Footer = () => {
   return (
  
      <footer className="row text-white" style={{ backgroundColor: '#052c65'}}>
         <div className="container">
            <div className="container d-flex justify-content-between">
               <div className="row container mission py-3">
                  <div className="col pb-2 box-1">
                     <h1 className="lead">Notre mission chez CHAFORD est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. En tant qu'organisation à but non lucratif, nous vous invitons à faire un don ou à devenir bénévole dès maintenant !</h1>
                  </div>
                  <div className="col box-2">
                     <h1 className="lead">Site Map</h1>
                     <Link>Acceuil</Link>
                     <Link>Notre travail</Link>
                     <Link>A Propos</Link>
                     <Link>Nous aider</Link>
                     <Link>Donate</Link>
                     <Link>Nous Contact</Link>
                  </div>
               </div>
            </div>
            <div className="social-section container my-5 row justify-content-between align-items-center">
               <p className="lead my-3 col-md-6 text-center text-md-left mb-2 mb-md-0">&copy; CHAFORD { new Date().getFullYear()} - All rights reserved.</p>
               <div className="d-flex justify-content-center my-3 col-md-6 text-center text-md-right" style={{ 
                  alignItems: 'center',
                  columnGap: '1em',
               }}>
                  <Link>
                     <img src={facebook} alt="facebook logo" />
                  </Link>
                  <Link>
                     <img src={instagram} alt="instagram logo" />
                  </Link>
                  <Link>
                     <img src={twitter} alt="twitter logo" />
                  </Link>
                  <Link>
                     <img src={instagram} alt="instagram logo" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;