import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from "react-router-dom";

const LayoutRoute = () => {
   return (
      <React.Fragment>
         <Header />
         <Outlet />
         <Footer />
      </React.Fragment>
   );
};

export default LayoutRoute;