import React from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from 'react-icons/fa6'
import {
   FaFacebook,
   FaLinkedin,
   FaTwitter,
   FaYoutube
} from "react-icons/fa";
import Link from 'next/link';
// import { Link } from 'react-router-dom';
// import './contact.css';


export default function HowToHelp() {
   return (
      <div>
         <h1 className=''>Nous Contactez</h1>
         <div>
            <div className='my-5'>
               <div>
                  <div className='contact-wrapper'>
                     <h2 className='mb-3'>Ecrivez Nous un message</h2>
                     <div className="form-wrapper">
                        <div className="mb-3">
                           <label htmlFor="userName" className="form-label">Votre Nom</label>
                           <input type="text" className="form-control" placeholder="Nom" />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="exampleFormControlInput1" className="form-label">Votre Email address</label>
                           <input type="email" className="form-control" id="userEmail" placeholder="bill@gmail.com" />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="exampleFormControlTextarea1" className="form-label">Ecrivez Nous Votre Message</label>
                           <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                        <button className="btn btn-primary">Envoyez</button>
                     </div>
                  </div>
               </div>
               <div className='loc-wrapper'>
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
                     <Link href={'/'}>
                        <FaFacebook />
                     </Link>
                     <Link href={'/'}>
                        <FaYoutube />
                     </Link>
                     <Link href={'/'}>
                        <FaTwitter />
                     </Link>
                     <Link href={'/'}>
                        <FaLinkedin />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}






