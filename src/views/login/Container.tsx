import img from '../../assets/common/img-login.webp'

import InputPhone from './components/InputPhone'
import InputDocument from './components/InputDocument'
import Checkbox from '../../components/basic/RIMCheck'
import type { IloginProps } from './types'
import { Controller, FormProvider } from 'react-hook-form'

const Container = ({
  handleSubmit,
  onSubmit,
  methods,
  errors,
  loading
}: IloginProps) => {
  return (
    <FormProvider {...methods}>
      <div className='relative flex flex-col max-w-screen w-[100vw] font-sonoma overflow-hidden h-full '>
        <div className=' bg-violet-700 absolute w-[132px] h-[156px] md:w-[332px] md:h-[356px] blur-[80px] md:blur-[140px]  -left-[100px] md:-left-[214px] bottom-[40px] md:top-[272px] rounded-full' />
        <div className=' bg-[#00F4E2] absolute w-[132px] h-[156px] md:w-[232px] md:h-[256px] blur-[70px] md:blur-[100px] -right-[0px] md:-right-[70px] -top-[100px] md:top-[174px] rounded-full' />
        <div className='grid md:grid-cols-2 sm:grid-cols-1 w-full h-min-[640px] max-w-6xl  mx-auto my-2 md:my-10 z-10'>
          <div className='grid grid-cols-2 md:grid-cols-1 m-auto  p-2'>
            <div className='block md:hidden p-3 w-full '>
              <div className='bg-gradient-to-r font-sonomaMedium tracking-wider from-[#00F4E2]  to-[#00FF7F] w-fit px-2 py-1 rounded-sm font-semibold text-[12px]'>
                Seguro Salud Flexible
              </div>
              <div className='font-sonomaSemiBold text-[28px]   max-w-[352px]'>
                Creado para ti y tu familia
              </div>
            </div>
            <div className='m-auto'>
              <img
                src={img}
                alt='img-login'
                width={480}
                height={560}
                className='rounded-xl md:rounded-4xl w-[136px]  h-[160px] md:w-[480px] md:h-[560px]'
              />
            </div>
          </div>
          <div className='flex  flex-col gap-5'>
            <div className='hidden md:block bg-gradient-to-r font-sonomaMedium tracking-wider from-[#00F4E2]  to-[#00FF7F] w-fit px-3 py-1 rounded-sm font-semibold text-sm'>
              Seguro Salud Flexible
            </div>
            <div className='hidden md:block font-sonomaSemiBold text-4xl   max-w-[352px]'>
              Creado para ti y tu familia
            </div>
            <div className='border-[0.5px] md:hidden border-[#CCD1EE] w-[90%] mx-auto mt-5  '></div>
            <div className='m-auto md:m-0 max-w-[352px] text-[14px] font-sonomaMedium md:text-sm px-5 md:px-0'>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </div>

            <div className='flex flex-col gap-5 max-w-[352px] m-auto md:m-0'>
              {/* Campo Documento */}
              <InputDocument />
              <InputPhone />
            </div>
            <div className='flex flex-col text-[12px] max-w-[352px] w-[352px]  m-auto md:m-0'>
              <Controller
                name='privacy'
                control={methods.control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <Checkbox
                      label='Acepto lo Política de Privacidad'
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    {errors.privacy && (
                      <span className=' text-red-500 text-xs mt-2'>
                        Política de Privacidad es requerido
                      </span>
                    )}
                  </>
                )}
              />
            </div>

            <div className='flex flex-col text-[12px] max-w-[352px] w-[352px]  m-auto md:m-0'>
              <Controller
                name='commercial'
                control={methods.control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <Checkbox
                      label='Acepto la Política Comunicaciones Comerciales'
                      checked={field.value}
                      onChange={field.onChange}
                    />
                    {errors.commercial && (
                      <span className=' text-red-500 text-xs mt-2'>
                        Política Comunicaciones Comerciales es requerido
                      </span>
                    )}
                  </>
                )}
              />
            </div>

            <div className='max-w-[352px]  w-[352px] m-auto   md:m-0'>
              <button
                className='cursor-pointer text-[12px] font-sonomaBold underline '
                type='button'
              >
                Aplican Términos y Condiciones.
              </button>
            </div>
            <div className='max-w-[352px] w-[352px]   m-auto  mt-8 md:mt-0 md:m-0'>
              <button
                onClick={handleSubmit(onSubmit)}
                className='bg-[#03050F] gap-3 flex items-center justify-center text-white  text-xl w-full md:w-[195px] h-[64px] rounded-full cursor-pointer'
              >
                {loading && (
                  <svg
                    className='animate-spin h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v8H4z'
                    />
                  </svg>
                )}
                {loading ? ' Enviando...' : 'Cotiza aquí'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default Container
