import React from 'react'
import img from '../../assets/common/img-login.png'
import logo from '../../assets/common/Logo-bn.svg'
import { Check, ChevronDown } from 'lucide-react' // asegúrate de tener lucide-react instalado
import InputPhone from './components/InputPhone'
import InputDocument from './components/InputDocument'
import Checkbox from '../../components/basic/RIMCheck'

const Login = () => {
  const year = new Date().getFullYear()
  return (
    <div className='relative flex flex-col  w-[100vw] '>
      <div className='bg-violet-700 absolute w-[332px] h-[356px] blur-[240px] -left-[214px] top-[272px] rounded-full' />
      <div className='bg-green-300 absolute w-[232px] h-[256px] blur-[140px] -right-[170px] top-[174px] rounded-full' />
      <div className='grid grid-cols-2 w-full h-min-[640px] max-w-6xl  mx-auto my-10'>
        <div className=''>
          <img
            src={img}
            alt='img-login'
            width={480}
            height={560}
            className='rounded-4xl'
          />
        </div>
        <div className='flex  flex-col gap-5'>
          <div className='bg-gradient-to-r font-sonomaMedium tracking-wider from-[#00F4E2]  to-[#00FF7F] w-fit px-3 py-1 rounded-sm font-semibold text-sm'>
            Seguro Salud Flexible
          </div>
          <div className='font-sonomaSemiBold text-4xl   max-w-[352px]'>
            Creado para ti y tu familia
          </div>
          <div className=' max-w-[352px]'>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </div>

          <div className='flex flex-col gap-5 max-w-[352px]'>
            {/* Campo Documento */}
            <InputDocument />
            <InputPhone />
          </div>
          <div className='text-[12px]'>
            <Checkbox label='Acepto lo Política de Privacidad' />
          </div>
          <div className='text-[12px]'>
            <Checkbox label='Acepto la Política Comunicaciones Comerciales' />
          </div>
          <div>
            {' '}
            <button className='cursor-pointer text-[12px] font-sonomaBold underline'>
              Aplican Términos y Condiciones.
            </button>
          </div>
          <div>
            <button className='bg-[#03050F] text-white  text-xl w-[195px] h-[64px] rounded-full cursor-pointer'>
              Cotiza aquí
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[#03050F] h-[106px]  w-full mx-auto  flex justify-center '>
        <div className='w-7xl  flex justify-between items-center'>
          <div>
            <img src={logo} alt='' />
          </div>
          <div className='text-white'>© {year} RIMAC Seguros y Reaseguros.</div>
        </div>
      </div>
    </div>
  )
}

export default Login
