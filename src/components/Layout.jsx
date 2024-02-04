import React from "react";
import Header from './Header';
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <div className="siteWrapper main" style={{ width: '100%'}}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;