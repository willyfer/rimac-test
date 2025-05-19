import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../assets/common/logo-rimac.svg'
import { Phone } from 'lucide-react'

const Layout: React.FC = () => {
  return (
    <div className=''>
      <header className='flex  items-center justify-center z-10'>
        <div className='w-7xl  h-[64px] flex  px-3 md:px-0 justify-between z-10 '>
          <div className='flex justify-center ml-4'>
            <img src={logo} alt='Rimac Logo' className='w-[70px] h-[45px]' />
          </div>
          <div className='flex justify-center  items-center gap-5'>
            <div className='hidden md:block font-sonomaBold font-medium text-[12px]'>
              ¡Compra por este medio!
            </div>
            <div className='flex gap-3 justify-center items-center text-[16px] md:text-[18px]  font-sonomaMedium'>
              <Phone fill='black' className='' width={15} color='black' /> (01)
              411 6001
            </div>
          </div>
        </div>
      </header>
      <main className='m-0 p-0 bg-[#FAFBFF] h-min-screen h-[83vh] max-h-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
