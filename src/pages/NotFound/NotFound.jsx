import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo-navy.svg';
import './notfound.css';

const NotFound = () => {
   return (
      <div>
         <div className="container">
            <Link to={'/'}>
               <div className="not-header py-3">
                  <img 
                     src={logo} 
                     alt="mon logo"
                     style={{
                        height: '70px',
                        width: '70px'
                     }} />
               </div>
            </Link>

            <div className="not-main">
               <h4 className="text-primary">404</h4>
               <h2 style={{
                  fontWeight: '700'
               }}>Page not found</h2>
               <p className="lead color-primary my-3">Désolé, nous n'avons pas pu trouver la page que vous recherchez</p>
               <Link to="/" className="text-primary">Retour à la page d'accueil</Link>
            </div>

            </div>
            <div className="not-footer">
               <div className="container not-wrapper-footer">
                  <Link className="lead">Contact Support</Link>
                  <Link className="lead">Status</Link>
               </div>
         </div>
      </div>
   );
};

export default NotFound;