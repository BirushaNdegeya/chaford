import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { 
   FaFacebook, 
   FaYoutube,
   FaWhatsapp
} from "react-icons/fa";

import './footer.css';

const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();
 
   return (
      <footer>
         <Container>
            {/* Mission Footer | Site Map Section */}
            <Row className="pt-5 flex-item">
               <Col md={8}>
                  <p className="lead mission">Notre mission chez CHAFORD est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. En tant qu'organisation à but non lucratif, nous vous invitons à faire un don ou à devenir bénévole dès maintenant !</p>
               </Col>
               <Col md={4} className="my-link-container">
                  <h4 className="sitemap">Site Map</h4>
                  <Link to="/">Acceuil</Link>
                  <Link to="/notre-travail">Notre travail</Link>
                  <Link to="/notre-equipe">Notre equipe</Link>
                  <Link to="/comment-aider">Nous aider</Link>
                  <Link to="/donate">Donate</Link>
                  <Link to="/contact">Nous Contact</Link>
               </Col>
            </Row>

            {/* Copyright | social section */}

            <Row className="py-5">
               <Col md={8}>
                  <p className="copyright">&copy; CHAFORD {year} - All rights reserved.</p>
               </Col>
               <Col md={4} className="social-media">
                  <Link to="https://web.facebook.com/Chaford2024">
                     <FaFacebook />
                  </Link>
                  <Link to="https://api.whatsapp.com/send?phone=243971616131">
                     <FaWhatsapp />
                  </Link>
                  <Link to="mailto:youremail@chaford2024@gmail.com">
                     <TfiEmail />
                  </Link>
                  <Link to="tel:+243971616131">
                     <PiPhoneCallFill />
                  </Link>
                  <Link to="https://www.youtube.com/channel/YOUR_CHANNEL_ID">
                     <FaYoutube />
                  </Link>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;
