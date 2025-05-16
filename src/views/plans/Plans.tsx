import React from 'react'
import line from '../../assets/common/line.svg'
import { ChevronLeftCircle } from 'lucide-react'
import CardPlan from './components/card/CardPlan'
import imgSecurity from '../../assets/common/IcProtectionLight.svg'
import imgAddUser from '../../assets/common/IcAddUserLight.svg'
const Plans = () => {
  return (
    <div>
      {/* STEPS */}
      <div className='w-full bg-[#EDEFFC] h-[56px] flex items-center justify-center'>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full bg-[#4F4FFF] text-white flex justify-center items-center text-sm'>
            1
          </div>
          <div className='text-[#141938]'> Planes y coberturas</div>
          <img src={line} alt='img-line' className='mr-5' />
        </div>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full border-1 border-[#4F4FFF] text-[#7981B2] flex justify-center items-center text-sm'>
            2
          </div>
          <div className='text-[#7981B2]'> Resumen</div>
        </div>
      </div>
      {/* CONTENT */}
      <div className='max-w-7xl  m-auto p-5'>
        <div>
          <button className='cursor-pointer text-[#4F4FFF] flex gap-3'>
            <ChevronLeftCircle /> Volver
          </button>
        </div>
        <div className='text-[40px] w-[545px] m-auto font-semibold text-center my-10'>
          Rocío ¿Para quién deseas cotizar?
        </div>
        <div className='text-[16px] w-[545px] m-auto font-semibold text-center my-10'>
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
        <div className='flex gap-5 m-auto w-fit '>
          <CardPlan
            title='Para mí'
            selected={true}
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            img={imgSecurity}
          />
          <CardPlan
            selected={false}
            title='Para alguien más'
            description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            img={imgAddUser}
          />
        </div>
      </div>
    </div>
  )
}

export default Plans
