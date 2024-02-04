import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import './header.css';

const Header = () => {
   return (
      <header className="my-header" style={{ background: '#052c65'}} >
         <nav className="navbar navbar-expand-lg navbar-dark py-3">
               <div className="container">
                  <Link 
                     to='/' className="navbar-brand"
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '5px'
                     }}>
                     <img 
                        src={logo} 
                        alt="my logo"
                        style={{
                           height: '30px',
                           margin: '0',
                           padding: '0',
                           marginRight: '10px'
                        }} />
                     <p style={{ margin: '0', padding: '0'}}>CHAFORD</p>
                  </Link>


                  <button 
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#navmenu">
                           <span className="navbar-toggler-icon"></span>
                  </button>

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
                                 to='/ourwork' 
                                 className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}>Notre Travail</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink 
                                 className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}
                                 to='/about'>Notre Equipe</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink 
                                 to='/donate' 
                                 className={`nav-link ${({ isActive }) => isActive ? 'active' : null}`}>Donate</NavLink>
                           </li>
                           <li className="nav-item">
                              <Link 
                                 to='/contact' 
                                 className={`nav-link ${({isActive}) => isActive ? 'active' : null}`}>Nous Contacter</Link>
                           </li>
                     </ul>
                  </div>
               </div>
         </nav>
      </header>
   );
};

export default Header;