import { Nunito } from "next/font/google"

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/modals/Modal"
import RegisterModal from "./components/modals/RegisterModal"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb Clone',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <RegisterModal/>
          <Navbar/>  
        {children}
      </body>
    </html>
  )
}