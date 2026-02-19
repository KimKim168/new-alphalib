import React from 'react'
import { ReactNode } from 'react';
import NavbarAlphalib from './components/NavbarAlphalib';
import AlphalibFooter from './components/AlphalibFooter';

interface LayoutProps {
    children: ReactNode;
}
const AlphalibLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavbarAlphalib/>
      <main className={` mx-auto min-h-screen`}>{children}</main>
      <AlphalibFooter/>
    </div>
  )
}

export default AlphalibLayout
