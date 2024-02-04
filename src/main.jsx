import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
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

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path='/' element={<HomePage />} />
               <Route path='/about' element={<About />} />
               <Route path='/ourwork' element={<OurWork />} />
               <Route path='howtohelp' element={<HowToHelp />} />
               <Route path='/donate' element={<Donate />} />
               <Route path='/contact' element={<Contact />} />
            </Route>
            <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);