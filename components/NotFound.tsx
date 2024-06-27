import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import './notfound.css';

const NotFound = () => {
   // const navigate = useNavigate();
   // const goToHome = () => {
   //    navigate('/');
   // };

   return (
      <div>
         <div className="not-main">
            <h4 className="text-primary">404</h4>
            <h2 style={{
               fontWeight: '700'
            }}>Page not found</h2>
            <p className="lead color-primary my-3">Désolé, nous n'avons pas pu trouver la page que vous recherchez</p>
            <button
               className="btn btn-primary text-white"
               onClick={() => alert('Go to hOme page')}>Retour à la page d'accueil</button>
         </div>
      </div>
   );
};
