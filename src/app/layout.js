//import './globals.css'
//import { Inter } from 'next/font/google'
//import { ThemeProvider } from '../ThemeContext';

//const inter = Inter({ subsets: ['latin'] })

//export const metadata = {
  //title: 'Create Next App',
  //description: 'Generated by create next app',
//}

//export default function RootLayout({ children }) {
 // return (
  //  <html lang="en">
  //    <body className={inter.className}>{children}</body>
  //  </html>
 // )
//}
// Layout.js
import React from 'react';
import { ThemeProvider } from '.components/ThemeContext';
import ThemeToggle from '.components/ThemeToggle';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={inter.className}>
        {/* Other layout elements */}
        {children}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Layout;

