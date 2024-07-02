import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from 'react-icons/fa6';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
   FaFacebook,
   FaLinkedin,
   FaTwitter,
   FaYoutube
} from "react-icons/fa";

import Link from 'next/link';


export default function HowToHelp() {
   // const { handleSubmit, reset, register } = useForm<{ 
   //    nom: string;
   //    email: string;
   //    message: string;
   // }>();
   // const onSubmit: SubmitHandler<{
   //    nom: string;
   //    email: string;
   //    message: string;
   // }> = (data: any) => {
   //    console.log(data);
   //    console.log('data arrived');
   //    reset();
   // }
   return (
      <div>
         <h1 className="text-blue-500 text-xl font-medium my-2 text-center">Ecrivez Nous un message</h1>
         <form className="flex flex-col gap-6 py-6 bg-gray-200">
            <input
               type="text"
               // {...register('nom')}
               placeholder="Entrez votre Nom"
               className="bg-slate-500 p-3 text-gray-50 outline-none"
            />
            <input
               type="email"
               // {...register('email')}
               placeholder="birushandegeya@gmail.com"
               className="bg-slate-500 p-3 text-gray-50 outline-none"
            />
            <textarea
               // {...register('message')}
               className="bg-slate-500 p-3 text-gray-50 outline-none resize-none"
            >
               Ecrivez-nous ici!
            </textarea>
            <button type="submit" className="bg-blue-500">Envoyez</button>
         </form>

         <section>
            <h2 className="text-blue-500 text-xl font-medium my-2 text-center">Suivez nous!</h2>
            <div>
               <div>
                  <PiPhoneCallFill />
                  <div>
                     <p>TELEPHONE</p>
                     <p>+243 971 616 131</p>
                  </div>
                  <Link href={'/'}>
                     <FaFacebook />
                  </Link>
                  <div className='loc-line'>
                     <FaLocationDot />
                     <div>
                        <p>ADRESSE</p>
                        <p>RD Congo Nord-Kivu,</p>
                        <p>GOMA, NDOSHO</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}