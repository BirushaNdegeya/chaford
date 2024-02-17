import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact/Contact';
import About from './pages/About';
import Donate from './pages/Donate';
import HowToHelp from './pages/HowToHelp';
import OurWork from './pages/OurWork';
import NotFound from './pages/NotFound/NotFound';
import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<HomePage />} />
               <Route path='a-propos' element={<About />} />
               <Route path='notre-travail' element={<OurWork />} />
               <Route path='comment-aider' element={<HowToHelp />} />
               <Route path='donate' element={<Donate />} />
               <Route path='contact' element={<Contact />} />
            </Route>
            <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);