
import React, { ReactNode } from 'react';


type Props = {

  children: ReactNode;

};
import { Inter } from 'next/font/google'






const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard',
}


 const RootLayout: React.FC<Props>=({ children })=>{
  
  return (
    <html lang="en">
       
      <body className={inter.className}>
           {children}
         </body>
      
    </html>
    
  )
}
export default  RootLayout;