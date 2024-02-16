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


const Contact = () => {
   return (
      <div className='contact-wrapper'>

         <Container>
            <h1 className='my-5 text-center'>Nous Contactez</h1>
            <Row className='my-5'>

               <Col md={8}>
                  <Row style={{ width: '80%', margin: '0px auto', boxShadow: '1.34px 2.48px 3px #052c65', padding: '2rem'}}>
                     <h2>Ecrivez Nous un message</h2>
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
                  </Row>
               </Col>
               <Col md={4}>
                  <h2>Nous Parler</h2>
                  <Row> 
                     <div>
                        <TfiEmail />
                        <div>
                           <p>EMAIL</p>
                        </div>
                     </div>
                     <div>
                        <PiPhoneCallFill />
                        <div>
                           <p>TELEPHONE</p>
                           <p>+243 971 616 131</p>
                        </div>
                     </div>
                     <div>
                        <FaLocationDot />
                        <div>
                           <p>ADRESSE</p>
                           <h3>RD Congo Nord-Kivu,</h3>
                           <h3>GOMA, NDOSHO</h3>
                        </div>
                     </div>
                     <h4>Suivez nous sur:</h4>
                     <FaFacebook />
                     <FaYoutube />
                     <FaTwitter />
                     <FaLinkedin />
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Contact;