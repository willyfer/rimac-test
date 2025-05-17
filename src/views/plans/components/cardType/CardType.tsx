import React from 'react'
import styles from './styles.module.sass'
import { CheckCircle2, Circle } from 'lucide-react'
import type { IPropsCardType } from '../../types'

const CardType = ({
  description,
  img,
  title,
  selected,
  onPress
}: IPropsCardType) => {
  return (
    <button
      onClick={() => onPress(title)}
      className={`${styles.cardType} md:w-[256px] w-full h-[160px] md:h-[212px] `}
      style={{ border: selected ? '3px solid black' : '' }}
      tabIndex={0}
    >
      <div className='flex flex-col  gap-2 text-left'>
        <div className='flex justify-end'>
          {!selected ? (
            <Circle />
          ) : (
            <CheckCircle2
              fill='#389E0D'
              stroke='white'
              color='white'
              size={24}
            />
          )}
        </div>
        <div className='flex gap-3'>
          <img src={img} alt='' className='w-[32px] md:w-[48px]' />
          <div className='md:hidden block text-[20px] font-latoBold'>
            {title}
          </div>
        </div>
        <div className='hidden md:flex text-[20px] font-latoBold'>{title}</div>
        <div className='text-[12px] text-[#141938]'>{description}</div>
      </div>
    </button>
  )
}

export default CardType
