import { ChevronDown } from 'lucide-react'
import React from 'react'

const InputDocument = () => {
  return (
    <div className='flex h-[56px] bg-white border border-[#5E6488] rounded-[8px] overflow-hidden'>
      {/* Select + icon */}
      <div className='relative flex items-center px-6'>
        <select
          className='appearance-none bg-transparent pr-8 text-lg font-medium text-black outline-none'
          defaultValue='DNI'
        >
          <option>DNI</option>
          <option>CE</option>
        </select>
        <ChevronDown
          size={20}
          className='absolute right-3 text-black pointer-events-none'
        />
      </div>

      {/* Separador */}
      <div className='w-px bg-[#616386]' />

      {/* Input de número */}
      <div className='relative bg-white   px-6 py-4 '>
        {/* Campo Celular con etiqueta flotante en focus o con valor */}
        <input
          type='text'
          id='doc'
          defaultValue='' // pon aquí tu valor inicial o vacío
          placeholder='Celular'
          className='peer h-full w-full mt-2 bg-transparent text-lg font-semibold text-[#03050F] outline-none placeholder-transparent'
        />
        <label
          htmlFor='doc'
          className={`
                absolute left-6 transition-all duration-200
                top-1 text-sm text-[#5E6488]       
                peer-placeholder-shown:top-1/2       
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-black
                peer-focus:top-1                 /* al hacer foco */
                peer-focus:-translate-y-0
                peer-focus:text-sm
                cursor-text
                peer-focus:text-[#5E6488]`}
        >
          Nro. de documento
        </label>
      </div>
    </div>
  )
}

export default InputDocument
