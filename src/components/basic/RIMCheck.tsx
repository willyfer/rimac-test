import React from 'react'
import { Check } from 'lucide-react' // o 'react-icons/hi' -> HiCheck

export default function Checkbox ({
  label,
  checked = false,
  onChange
}: {
  label: string
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <label className='inline-flex items-center cursor-pointer'>
      <input type='checkbox' onChange={onChange} className='peer sr-only' />
      <div
        className={`
          w-5 h-5 border-2 border-gray-400 rounded-sm
          flex-shrink-0 flex items-center justify-center
          transition-colors duration-200
          peer-checked:bg-[#0A051E] peer-checked:border-[#0A051E]
        `}
      >
        {/* El icono siempre está, pero oculto por default */}
        <Check className=' w-4 h-4 text-white peer-checked:block' />
      </div>
      <span className='ml-2 select-none'>{label}</span>
    </label>
  )
}
