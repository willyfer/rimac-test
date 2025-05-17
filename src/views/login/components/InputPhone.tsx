// InputPhone.tsx
import { useFormContext } from 'react-hook-form'

const InputPhone = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <div className='relative bg-white border border-[#616386] rounded-[8px] px-6 py-4 h-[56px]'>
        <input
          type='tel'
          id='celular'
          maxLength={9}
          placeholder='Celular'
          inputMode='numeric'
          onInput={e => {
            const input = e.target as HTMLInputElement
            input.value = input.value.replace(/\D/g, '') // Elimina letras y símbolos
          }}
          {...register('phone', {
            required: true,
            pattern: {
              value: /^9\d{8}$/, // Empieza con 9 y tiene 9 dígitos en total
              message: 'Debe empezar con 9 y tener 9 dígitos'
            }
          })}
          className='peer h-full w-full mt-2 bg-transparent text-lg font-semibold text-black outline-none placeholder-transparent'
        />
        <label
          htmlFor='celular'
          className='absolute left-6 transition-all duration-200
          top-1 text-xs text-[#5E6488]
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:text-base peer-placeholder-shown:text-black
          peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs
          cursor-text peer-focus:text-[#5E6488]'
        >
          Celular
        </label>
      </div>
      {errors.phone && (
        <span className=' text-red-500 text-xs -mt-4'>
          {errors.phone.message?.toString()
            ? errors.phone.message.toString()
            : 'El celular es requerido'}
        </span>
      )}
    </>
  )
}

export default InputPhone
