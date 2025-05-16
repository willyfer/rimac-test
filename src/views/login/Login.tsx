import img from '../../assets/common/img-login.png'
import logo from '../../assets/common/Logo-bn.svg'
import InputPhone from './components/InputPhone'
import InputDocument from './components/InputDocument'
import Checkbox from '../../components/basic/RIMCheck'

const Login = () => {
  const year = new Date().getFullYear()
  return (
    <div className='relative flex flex-col max-w-screen w-[100vw] '>
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
          <div className='text-[12px] max-w-[352px] w-[352px]  m-auto md:m-0'>
            <Checkbox label='Acepto lo Política de Privacidad' />
          </div>
          <div className='text-[12px] max-w-[352px] w-[352px]  m-auto md:m-0'>
            <Checkbox label='Acepto la Política Comunicaciones Comerciales' />
          </div>
          <div className='max-w-[352px]  w-[352px] m-auto   md:m-0'>
            {' '}
            <button className='cursor-pointer text-[12px] font-sonomaBold underline '>
              Aplican Términos y Condiciones.
            </button>
          </div>
          <div className='max-w-[352px] w-[352px]   m-auto  mt-8 md:mt-0 md:m-0'>
            <button className='bg-[#03050F] text-white  text-xl w-full md:w-[195px] h-[64px] rounded-full cursor-pointer'>
              Cotiza aquí
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='bg-[#03050F] h-[106px]  w-full mx-auto  flex justify-center mt-18 md:mt-0  z-10'>
        <div className='w-7xl  flex justify-between items-center'>
          <div className='m-auto md:m-0'>
            <img src={logo} alt='' />
          </div>
          <div className='hidden md:block text-white'>
            © {year} RIMAC Seguros y Reaseguros.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
