import { ChevronLeftCircle } from 'lucide-react'

import CardType from './components/cardType/CardType'
import HorizontalSlider from '../../components/complex/HorizontalSlider'
import CardPlan from './components/cardPlan/CardPlan'

import imgSecurity from '../../assets/common/IcProtectionLight.svg'
import imgAddUser from '../../assets/common/IcAddUserLight.svg'

import line from '../../assets/common/line.svg'
import type { IcontainerProps } from './types'

const Container = ({
  user,
  selectType,
  plans,
  scrollToSection,
  sectionRef,
  handleBack,
  handleSetPlanSelecet
}: IcontainerProps) => {
  return (
    <div className='font-lato'>
      {/* **********  STEPS ********* */}
      <div className='hidden md:flex w-full bg-[#EDEFFC] h-[56px]  items-center justify-center'>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full bg-[#4F4FFF] text-white flex justify-center items-center text-sm'>
            1
          </div>
          <div className='text-[#141938] font-Lato'> Planes y coberturas</div>
          <img src={line} alt='img-line' className='mr-5' />
        </div>
        <div className='flex gap-4'>
          <div className='w-[24px] h-[24px] rounded-full border-1 border-[#7981B2] text-[#7981B2] flex justify-center items-center text-sm'>
            2
          </div>
          <div className='text-[#7981B2]'> Resumen</div>
        </div>
      </div>

      {/* **********  CONTENT  **************/}
      <div className='max-w-7xl  md:m-auto md:p-5'>
        {/*  **** MOBILE ***** */}
        <div className='w-full p-5 items-center  flex gap-5  md:hidden border-b-2 border-[#FAFBFF]'>
          <div>
            <button
              className='cursor-pointer text-[#4F4FFF] flex gap-3'
              onClick={() => handleBack()}
            >
              <ChevronLeftCircle />
            </button>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='text-[10px] font-bold'>PASO 1 DE 2</div>
            <div className='relative bg-[#D7DBF5] w-[212px] h-2 rounded'>
              <div className='absolute bg-[#4F4FFF] w-5 h-2 rounded'></div>
            </div>
          </div>
        </div>

        {/*  **** FIN MOBILE ***** */}

        <div className='hidden md:flex'>
          <button
            className='cursor-pointer text-[#4F4FFF] flex gap-3'
            onClick={() => handleBack()}
          >
            <ChevronLeftCircle /> Volver
          </button>
        </div>
        <div className='text-[28px] md:text-[40px] w-[366px] md:w-[545px] m-auto md:font-bold md:text-center md:my-5'>
          {user.name} ¿Para quién deseas cotizar?
        </div>
        <div className='text-[16px] w-[366px] md:w-[545px] m-auto md:font-bold md:text-center mb-3 md:my-10'>
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
        <div className='flex flex-col md:flex-row gap-5 m-auto w-fit p-10'>
          <CardType
            title='Para mí'
            selected={selectType == 'Para mí'}
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            img={imgSecurity}
            onPress={scrollToSection}
          />
          <CardType
            title='Para alguien más'
            selected={selectType == 'Para alguien más'}
            description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            img={imgAddUser}
            onPress={scrollToSection}
          />
        </div>
        <div className='flex gap-5 mt-10'></div>
      </div>

      {/*  ******* SLIDER  *********/}

      {selectType !== '' && (
        <div id='sliderPlans' ref={sectionRef}>
          <HorizontalSlider>
            {plans.map((el, index) => (
              <CardPlan
                key={index}
                plan={el}
                selectType={selectType}
                handleSelect={handleSetPlanSelecet}
              />
            ))}
          </HorizontalSlider>
        </div>
      )}
    </div>
  )
}

export default Container
