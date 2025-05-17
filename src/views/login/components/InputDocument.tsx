// InputDocument.tsx
import { ChevronDown } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

const InputDocument = () => {
  const {
    register,
    watch,
    getValues,
    formState: { errors, touchedFields }
  } = useFormContext()
  const documentType = getValues('documentType')
  return (
    <>
      <div className='flex h-[56px] bg-white border border-[#5E6488] rounded-[8px] overflow-hidden'>
        <div className='relative flex items-center px-6'>
          <select
            {...register('documentType')}
            className='appearance-none bg-transparent pr-8 text-lg font-medium text-black outline-none'
          >
            <option value='DNI'>DNI</option>
            <option value='CE'>CE</option>
          </select>
          <ChevronDown
            size={20}
            className='absolute right-3 text-black pointer-events-none'
          />
        </div>

        <div className='w-px bg-[#616386]' />

        <div className='relative bg-white px-6 py-4'>
          <input
            type='text'
            id='doc'
            inputMode='numeric'
            onInput={e => {
              const input = e.target as HTMLInputElement
              input.value = input.value.replace(/\D/g, '') // Elimina letras y símbolos
            }}
            maxLength={documentType == 'DNI' ? 8 : 11}
            placeholder='Documento'
            {...register('document', { required: true })}
            className='peer h-full w-full mt-2 bg-transparent text-lg font-semibold text-[#03050F] outline-none placeholder-transparent'
          />
          <label
            htmlFor='doc'
            className='font-sonoma absolute left-6 transition-all duration-200
            top-1 text-sm text-[#5E6488]
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
            peer-placeholder-shown:text-base peer-placeholder-shown:text-black
            peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-sm
            cursor-text peer-focus:text-[#5E6488]'
          >
            Nro. de documento
          </label>
        </div>
      </div>
      {errors.document && (
        <span className='text-red-500 text-xs -mt-4'>
          Nro de Documento es requerido
        </span>
      )}
      {errors.documentType && (
        <span className='text-red-500 text-xs -mt-4'>
          El Tipo de Documento es requerido
        </span>
      )}
    </>
  )
}

export default InputDocument
