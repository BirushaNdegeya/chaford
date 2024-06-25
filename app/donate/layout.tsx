import { Metadata } from "next";


export const metadata: Metadata = {
   title: 'chaford.org/donate-now'
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <body>
            {children}
         </body>
      </html>
   )
} 