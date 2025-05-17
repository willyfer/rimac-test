import React from 'react'

import styles from './styles.module.sass'
import home from '../../../../assets/common/plans/IcHomeLight.svg'
import hp from '../../../../assets/common/plans/IcHospitalLight.svg'
import { Circle } from 'lucide-react'
import { RECOMMENDED, TYPE_DESCOUNT } from '../../utils'
import type { IpropsCardPlan } from '../../types'

const CardPlan = ({ plan, handleSelect, selectType }: IpropsCardPlan) => {
  return (
    <div className={styles.cardPlan}>
      <div className='mt-5'>
        {RECOMMENDED === plan.name ? (
          <div className='px-2 text-[12px] mb-1 font-latoBold font-bold w-fit bg-[#7DF0BA] rounded-[6px]'>
            Plan recomendado
          </div>
        ) : (
          <div className='h-[35px]' />
        )}
      </div>
      <div className='flex gap-2 w-[224px] justify-between items-start '>
        <div
          className={`text-[24px] font-latoBold font-bold  ${styles.title} `}
        >
          {plan.name}
          <div className='text-[#7981B2] text-[12px]  mt-5 font-latoBold '>
            COSTO DEL PLAN
          </div>
          <div
            className='text-[#141938] text-[20px] font-latoBold '
            style={{
              color: TYPE_DESCOUNT === selectType ? '#7981B2' : '#141938',
              fontSize: TYPE_DESCOUNT === selectType ? '14px' : '20px',
              textDecoration:
                TYPE_DESCOUNT === selectType ? 'line-through' : 'none',
              marginTop: TYPE_DESCOUNT === selectType ? '-15px' : ''
            }}
          >
            ${plan.price} al mes
          </div>
          {TYPE_DESCOUNT === selectType && (
            <div className='text-[#141938] text-[20px] font-latoBold '>
              ${plan.price - plan.price * 0.05} al mes
            </div>
          )}
        </div>
        <div className='flex items-end  justify-end  min-w-[56px]'>
          <img
            src={RECOMMENDED === plan.name ? hp : home}
            alt=''
            width={56}
            height={56}
            className=''
          />
        </div>
      </div>
      <div className='bg-[#D7DBF5] h-[1px] my-7 '></div>

      <div className='w-[224px] flex flex-col  gap-5 p-2'>
        {plan.description.map(el => (
          <div key={el} className='flex justify-start  items-start gap-2'>
            <div className='pt-3'>
              <Circle fill='black' size={8} />
            </div>
            <div
              className={`flex text-[16px] font-latolight  ${styles.descText} `}
            >
              {el}
            </div>
          </div>
        ))}
      </div>
      <div
        className='w-[224px] absolute bottom-10'
        style={{ bottom: TYPE_DESCOUNT === selectType ? '10px' : '20px' }}
      >
        <button
          className='w-full p-2 rounded-full cursor-pointer text-white bg-[#FF1C44]'
          onClick={() => handleSelect(plan)}
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  )
}

export default CardPlan
