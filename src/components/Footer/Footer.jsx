import React from "react";
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/icon-facebook.svg';
import instagram from '../../assets/icons/icon-instagram.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
// import youtube from '../../assets/icons/youtube_activity_FILL0_wght400_GRADO_opsz24.svg';
// import './footer.css';

const Footer = () => {
   return (
  
      <footer className="row text-white" style={{ backgroundColor: '#052c65'}}>
         <div className="container">
            <div className="container">
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
            <div className="social-section container">
               <p className="lead">&copy; CHAFORD { new Date().getFullYear()} - All rights reserved.</p>
               <div>
                  <Link>
                     <img src={facebook} alt="mylogo" />
                  </Link>
                  <Link>
                     <img src={instagram} alt="mylogo" />
                  </Link>
                  <Link>
                     <img src="" alt="mylogo" />
                  </Link>
                  <Link>
                     <img src={""} alt="mylogo" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;