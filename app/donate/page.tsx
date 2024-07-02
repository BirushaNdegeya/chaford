import React from "react";
// import { Container } from "react-bootstrap";
// import { FaWhatsapp, FaCircleCheck } from '../../data/Images';
// import { Link } from 'react-router-dom';
// import './donate.css';
import Link from 'next/link';


export default function Donate() {
   return (
      <main>

         <h1>Donate Page</h1>
         <div className="my-5 donate">
            <h1 className="my-5 text-info">Donate Now !</h1>
            <p>
               {/* <FaCircleCheck color="#0dcaf0" size={100} /> */}
            </p>
            <h1 className="my-5 text-warning"><span className="text-success">EQUITY BANK: </span><span className="mycustom">288200080805089</span></h1>
            <p className="lead">Si Equity Bank n'est pas disponible dans votre pays, vous pouvez contacter nos agents financiers pour plus de conseils.</p>
            <p>
               <Link href="https://api.whatsapp.com/send?phone=243993101237">
                  {/* <FaWhatsapp /> */}
               </Link>

            </p>
         </div>
      </main>
   );
}




