import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import Container from "react-bootstrap/Container";
import './header.css';

const Header = () => {
   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-dark py-3">
            <Container>
               <Link to='/' className="navbar-brand logo">
                  <img src={logo} alt="le logo de charity for development chaford"/>
                  <p>CHAFORD</p>
               </Link>
               {/* Hambuger Menu */}
               <button 
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
               </button>
               {/* Navigation */}
               <div className="collapse navbar-collapse" id="navmenu">
                  <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                           <NavLink 
                              to='/' 
                              className={`nav-link ${({ isActive}) => isActive ? 'active' : null}`}
                              >Acceuil</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink 
                              to='/notre-travail' 
                              className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}>Notre Travail</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink 
                              className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}
                              to='/notre-equipe'>Notre Equipe</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink 
                              to='/donate' 
                              className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}>Donate</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink 
                              to='/contact' 
                              className={`nav-link ${({isActive}) => isActive ? 'active' : null}`}>Nous Contacter</NavLink>
                        </li>
                  </ul>
               </div>
            </Container>
         </nav>
      </header>
   );
};

export default Header;