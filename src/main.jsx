import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact/Contact';
import OurTeam from './pages/NotreEquipe/OurTeam';
import Donate from './pages/Donate/Donate';
import HowToHelp from './pages/CommentAiderBenevolant/HowToHelp';
import OurWork from './pages/NotreTravail/OurWork';
import NotFound from './pages/NotFound/NotFound';
import LayoutRoute from './routes/LayoutRoute';
import {
   RouterProvider,
   createBrowserRouter,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <LayoutRoute />,
      children: [
         {
            path: '/',
            element: <HomePage />
         },
         {
            path: 'notre-equipe',
         }
      ]
   },
   {
      path: '*',
      element: <NotFound />
   }
]);


const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<HomePage />} />
               <Route path='notre-equipe' element={<OurTeam />} />
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
root.render(<RouterProvider router={router} />);