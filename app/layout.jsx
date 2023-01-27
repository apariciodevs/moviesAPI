import "./globals.css";

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', ],
  subsets: ['latin'],
  variable: '--font-montserrat', 
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <head />
      <body className={`${montserrat.className} mx-8 my-12`} >
      
        
        {children}</body>
    </html>
  );
}
