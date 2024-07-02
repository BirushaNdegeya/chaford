import Image from 'next/image';
import images from '@/constants/images';


export default function Home() {
   return (
      <div className='container md:h-[70vh] flex flex-col items-center justify-center'>
         <div className='md:flex gap-14'>
            <Image
               src={images.welcomescreen}
               alt='welcome screen'
               className='w-full h-56 object-cover md:w-80 md:h-64'
            />
            <div>
               <h1 className='text-4xl font-bold text-blue-950 py-3 text-center md:text-xl md:text-justify'>CHARITY FOR DEVELOPMENT</h1>
               <p className="text-blue-500 text-xl font-medium mb-2">Generous for a better world</p>
               <p className="text-justify md:text-lg">Les activités de CHAFORD comprennent l'éducation, la santé et la nutrition, la constructiona de la paix, l'égalité des genres, les urgences, le climat et l'environnement, ainsi que l'évangélisme et le mentorat des enfants et des adultes</p>
            </div>
         </div>

         <section className='py-3'>
            <p className='text-blue-500 text-xl font-medium mb-2'>Qui sommes Nous ?</p>
            <p className='text-justify'>Un groupe de jeunes bénévoles congolais, basé en RD Congo dans la province du Nord-Kivu, s'engage à promouvoir le développement local dans les pays subsahariens. Nous proposons des services de tutorat aux enfants et aux adultes, tout en apportant assistance aux enfants orphelins et aux réfugiés. Notre engagement inclut la promotion de l'égalité des genres, le soutien à l'entrepreneuriat, au leadership, ainsi que la préparation aux examens nationaux, notamment l'EXETAT et le TENAFP.</p>
         </section>
      </div>
   );
}