import React from 'react'

import line from '../../assets/common/line.svg'
import { ChevronLeftCircle } from 'lucide-react'
import type { IcontainerProps } from './types'
import familyIcon from '../../assets/common/gl_family-24x24.svg'
import styles from './styles.module.sass'

const Container = ({ handleBack, plan, user }: IcontainerProps) => {
  return (
    <div className=''>
      {/* **********  STEPS ********* */}
      <div className='hidden md:flex w-full bg-[#EDEFFC] h-[56px]  items-center justify-center'>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full border-1  border-[##7981B2] text-[#7981B2] flex justify-center items-center text-sm'>
            1
          </div>
          <div className='text-[#7981B2] font-lato'> Planes y coberturas</div>
          <img src={line} alt='img-line' className='mr-5' />
        </div>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full bg-[#4F4FFF] text-white  font-lato flex justify-center items-center text-sm'>
            2
          </div>
          <div className=' text-[#141938] font-lato'> Resumen</div>
        </div>
      </div>
      <div className='max-w-7xl  md:m-auto md:p-5 p-5'>
        <div className='hidden md:block'>
          <button
            className='cursor-pointer text-[#4F4FFF] flex gap-3 font-lato'
            onClick={() => handleBack()}
          >
            <ChevronLeftCircle /> Volver
          </button>
        </div>

        <div className='text-[32px] md:text-[40px] mt-10 md:mt-10 font-lato my-auto md:my-0 text-center md:text-left'>
          Resumen del seguro
        </div>
        <div
          className={`bg-white rounded-[24px] w-full py-5 px-10 mt-10 ${styles.card} `}
        >
          <div className='flex flex-col gap-5'>
            <div
              className={`text-[10px] ${styles.textPrice} tracking-wider uppercase  font-lato font-bold`}
            >
              Precios calculados para:
            </div>
            <div className='flex gap-4'>
              <img src={familyIcon} alt='' />
              <div className='text-[20px] font-lato'>
                {user.name}
                {` `} {user.lastName}
              </div>
            </div>
            <div className='border-b-1 border-b-[#D7DBF5]'></div>
          </div>
          <div>
            <div className='flex flex-col gap-4 my-5'>
              <div className='text-[16px] font-lato'>Responsable de pago</div>
              <div className='text-[14px] font-latolight'>
                {user.documentType} : {user.document}
              </div>
              <div className='text-[14px] font-latolight'>
                Celular: 51{user.phone}
              </div>
            </div>
            <div className='flex flex-col gap-4 my-5'>
              <div className='text-[16px] font-lato'> Plan elegido</div>
              <div className='text-[14px] font-latolight'>{plan?.name}</div>
              <div className='text-[14px] font-latolight'>
                Costo del Plan: ${plan?.price} al mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
