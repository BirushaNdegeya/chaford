import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from 'react-icons/fa6'
import { 
   FaFacebook, 
   FaLinkedin, 
   FaTwitter, 
   FaYoutube 
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './contact.css';


const Contact = () => {
   return (
      <Container>
         <h1 className='my-5 text-center'>Nous Contactez</h1>
         <Row className='my-5'>
            <Col md={8}>
               <Row className='contact-wrapper'>
                  <h2 className='mb-3'>Ecrivez Nous un message</h2>
                  <div className="form-wrapper">
                     <div class="mb-3">
                        <label htmlFor="userName" className="form-label">Votre Nom</label>
                        <input type="text" className="form-control" placeholder="Nom" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Votre Email address</label>
                        <input type="email" class="form-control" id="userEmail" placeholder="bill@gmail.com" />
                     </div>
                     <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Ecrivez Nous Votre Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     </div>
                     <button className="btn btn-primary">Envoyez</button>
                  </div>
               </Row>
            </Col>
            <Col md={4} className='loc-wrapper'>
               <h2 className='mb-3'>Nous Parler</h2>
                  <div className='loc-line'>
                     <TfiEmail />
                     <div>
                        <p>EMAIL</p>
                        <p>chaford2024@gmail.com</p>
                     </div>
                  </div>

                  <div className='loc-line'>
                     <PiPhoneCallFill />
                     <div>
                        <p>TELEPHONE</p>
                        <p>+243 971 616 131</p>
                     </div>
                  </div>

                  <div className='loc-line'>
                     <FaLocationDot />
                     <div>
                        <p>ADRESSE</p>
                        <p>RD Congo Nord-Kivu,</p>
                        <p>GOMA, NDOSHO</p>
                     </div>
                  </div>

                  <h4 className='my-3'>Suivez nous sur:</h4>
                  <div className="conct-social">
                     <Link>
                        <FaFacebook />
                     </Link>
                     <Link>
                        <FaYoutube />
                     </Link>
                     <Link>
                        <FaTwitter />
                     </Link>
                     <Link>
                        <FaLinkedin />
                     </Link>

                  </div>
            </Col>
         </Row>
         <Row className='my-5'>
            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=29.17650640010834%2C-1.6400567723011859%2C29.17949974536896%2C-1.6384802788544266&amp;layer=mapnik"></iframe>
         </Row>
      </Container>
   );
};

export default Contact;