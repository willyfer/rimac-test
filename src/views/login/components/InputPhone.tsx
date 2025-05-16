import React from 'react'

const InputPhone = () => {
  return (
    <div className='relative bg-white border border-[#616386] rounded-[8px] px-6 py-4 h-[56px]'>
      {/* Campo Celular con etiqueta flotante en focus o con valor */}
      <input
        type='tel'
        id='celular'
        defaultValue='' // pon aquí tu valor inicial o vacío
        placeholder='Celular'
        className='peer h-full w-full  mt-2 bg-transparent text-lg font-semibold text-black outline-none placeholder-transparent'
      />
      <label
        htmlFor='celular'
        className={`
                absolute left-6 transition-all duration-200
                top-1 text-xs text-[#5E6488]       
                peer-placeholder-shown:top-1/2       
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-black
                peer-focus:top-1               /* al hacer foco */
                peer-focus:-translate-y-0
                peer-focus:text-xs
                cursor-text
                peer-focus:text-[#5E6488]`}
      >
        Celular
      </label>
    </div>
  )
}

export default InputPhone
