import Link from 'next/link';
import Navigation from './Navigation';
import Logo from "./Logo";
import Hambuger from './Hambuger';


export default function Header() {
   const colors = 'bg-[#052c65]'
   return (
      <header className="shadow-sm border-b border-gray-200 sticky top-0 h-16 flex items-center justify-between px-2 bg-gray-50">
         <div className='flex items-center justify-between container'>
            <Link href={'/'} className='flex items-center gap-2 font-medium text-2xl'>
               <Logo />
               <h1>CHAFORD</h1>
            </Link>
            <Hambuger />
            <Navigation />
         </div>
      </header>
   );
}