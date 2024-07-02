import Link from 'next/link';
import Image from 'next/image';
import images from '@/constants/images';
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import {
   FaFacebook,
   FaWhatsapp
} from "react-icons/fa";


export default function Footer(): JSX.Element {
   const year: number = new Date().getFullYear();
   return (
      <footer className='shadow-md shadow-black bg-blue-500 text-gray-50 py-6'>
         <div className='container px-2 md:px-0'>
            <div className="md:flex gap-24">
               <p className="text-center mb-4 md:text-justify md:mb-0 md:text-md lg:text-xl">Notre mission chez CHAFORD est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. En tant qu'organisation à but non lucratif, nous vous invitons à faire un don ou à devenir bénévole dès maintenant !</p>
               <Image
                  src={images.paperPen}
                  alt='kids learning materials'
                  className='hidden md:block h-28 w-80 object-cover'
               />
            </div>
            <div className='py-4 md:flex flex-row-reverse justify-between items-center'>
               <div className='flex items-center gap-6 justify-center mb-4'>
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
               <p className='text-center'>&copy; CHAFORD {year} - All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
}
