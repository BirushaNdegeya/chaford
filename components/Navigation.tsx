import Link from "next/link";


export default function Navigation() {
   return (
      <nav className="hidden lg:flex items-center gap-4">
         <Link href={'/'}>
            Acceuil
         </Link>
         <Link href={'/ourwork'} className={`${(isActive: any)=> isActive ? 'font-bold': '' }`}>
            Notre Travail
         </Link>
         <Link href={'/ourteam'}>
            Notre Equipe
         </Link>
         <Link href={'/donate'}>
            Donate
         </Link>
         <Link href={'/howtohelp'}>
            Nous Contacter
         </Link>
      </nav>
   );
}