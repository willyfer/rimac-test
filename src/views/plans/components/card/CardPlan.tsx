import React from 'react'
import styles from './styles.module.sass'
import {
  Check,
  CheckCircle,
  CheckCircle2,
  Circle,
  CircleDot
} from 'lucide-react'

type props = {
  img: string
  title: string
  description: string
  selected: boolean
}

const CardPlan = ({ description, img, title, selected }: props) => {
  return (
    <div
      className={styles.cardPlan}
      style={{ border: selected ? '3px solid black' : '' }}
    >
      <div className='flex justify-end'>
        {!selected ? (
          <Circle />
        ) : (
          <CheckCircle2 fill='#389E0D' stroke='white' color='white' size={24} />
        )}
      </div>
      <div>
        <img src={img} alt='' />
      </div>
      <div className='text-[20px] font-sonomaSemiBold'>{title}</div>
      <div className='text-[12px] text-[#141938]'>{description}</div>
    </div>
  )
}

export default CardPlan
