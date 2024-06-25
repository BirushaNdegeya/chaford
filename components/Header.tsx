import Link from 'next/link';
import Navigation from './Navigation';
import Logo from "./Logo";
import Hambuger from './Hambuger';


export default function Header() {
   return (
      <header className="bg-[#052c65] text-white sticky top-0 h-16 flex items-center justify-between px-2">
         <Link href={'/'} className='flex items-center gap-2 font-medium text-2xl'>
            <Logo />
            <h1>CHAFORD</h1>
         </Link>
         <Hambuger />
         <Navigation />
      </header>
   );
}