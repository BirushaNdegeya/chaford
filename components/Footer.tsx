import Link from 'next/link';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import {
   FaFacebook,
   FaWhatsapp
} from "react-icons/fa";


export default function Footer() {
   const date = new Date();
   const year = date.getFullYear();
   return (
      <footer className='border-t border-gray-200 shadow-sm bg-gray-50'>
         <div className='container p-2 md:px-0'>
            <div className="">
               <p className="text-center mb-4">Notre mission chez CHAFORD est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. En tant qu'organisation à but non lucratif, nous vous invitons à faire un don ou à devenir bénévole dès maintenant !</p>
               <div className="my-link-container hidden">
                  <h4 className="sitemap">Site Map</h4>
                  <Link href="/">Acceuil</Link>
                  <Link href="/notre-travail">Notre travail</Link>
                  <Link href="/notre-equipe">Notre equipe</Link>
                  <Link href="/comment-aider">Nous aider</Link>
                  <Link href="/donate">Donate</Link>
                  <Link href="/contact">Nous Contact</Link>
               </div>
            </div>


            <div className="flex flex-col-reverse gap-4">
               <p className='text-center'>&copy; CHAFORD {year} - All rights reserved.</p>
               <div className='flex items-center justify-center gap-4'>
                  <Link href="https://web.facebook.com/Chaford2024">
                     <FaFacebook size={24} />
                  </Link>
                  <Link href="https://api.whatsapp.com/send?phone=243971616131">
                     <FaWhatsapp size={24} />
                  </Link>
                  <Link href="mailhref:youremail@chaford2024@gmail.com">
                     <TfiEmail size={24} />
                  </Link>
                  <Link href="tel:+243971616131">
                     <PiPhoneCallFill size={24} />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
