import Link from "next/link";


export default function Navigation() {
   return (
      <nav className="hidden lg:block">
         <Link href={'/'}>
            Acceuil
         </Link>
         <Link href={'/ourwork'}>
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