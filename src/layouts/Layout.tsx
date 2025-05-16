import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../assets/common/logo-rimac.svg'
import { Phone } from 'lucide-react'

const Layout: React.FC = () => {
  return (
    <div className=''>
      <header className='flex  items-center justify-center'>
        <div className='w-7xl  h-[64px] flex  justify-between '>
          <div className='flex justify-center ml-4'>
            <img src={logo} alt='Rimac Logo' className='w-[70px] h-[45px]' />
          </div>
          <div className='flex justify-center  items-center gap-5'>
            <div className='text-[12px]'>¡Compra por este medio!</div>
            <div className='flex gap-1 text-[18px] font-sonomaMedium'>
              <Phone fill='black' className='' width={15} color='black' /> (01)
              411 6001
            </div>
          </div>
        </div>
      </header>
      <main className='m-0 p-0'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
