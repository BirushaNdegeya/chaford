import Link from 'next/link';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { 
   FaFacebook, 
   FaYoutube,
   FaWhatsapp
} from "react-icons/fa";


export default function Footer() {

   const date = new Date();
   const year = date.getFullYear();
   return (
      <footer className='bg-[#052c65] text-white'>

            {/* Mission Footer | Site Map Section */}
            <div className="pt-5 flex-item">
               <div>
                  <p className="lead mission">Notre mission chez CHAFORD est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. En tant qu'organisation à but non lucratif, nous vous invitons à faire un don ou à devenir bénévole dès maintenant !</p>
               </div>
               <div className="my-link-container">
                  <h4 className="sitemap">Site Map</h4>
                  <Link href="/">Acceuil</Link>
                  <Link href="/notre-travail">Notre travail</Link>
                  <Link href="/notre-equipe">Notre equipe</Link>
                  <Link href="/comment-aider">Nous aider</Link>
                  <Link href="/donate">Donate</Link>
                  <Link href="/contact">Nous Contact</Link>
               </div>
            </div>

            {/* Copyright | social section */}

            <div className="py-5">
               <div>
                  <p className="copyright">&copy; CHAFORD {year} - All rights reserved.</p>
               </div>
               <div>
                  <Link href="https://web.facebook.com/Chaford2024">
                     <FaFacebook />
                  </Link>
                  <Link href="https://api.whatsapp.com/send?phone=243971616131">
                     <FaWhatsapp />
                  </Link>
                  <Link href="mailhref:youremail@chaford2024@gmail.com">
                     <TfiEmail />
                  </Link>
                  <Link href="tel:+243971616131">
                     <PiPhoneCallFill />
                  </Link>
                  <Link href="https://www.youtube.com/channel/YOUR_CHANNEL_ID">
                     <FaYoutube />
                  </Link>
               </div>
            </div>

      </footer>
   );
}
