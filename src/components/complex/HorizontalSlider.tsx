import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'

export type props = {
  children: ReactNode
}
const HorizontalSlider = ({ children }: props) => {
  const sliderRef = useRef<any>(null)
  const scrollAmount = 220

  const scroll = (direction: any) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='relative w-[80%] md:w-[926px] m-auto'>
      {/* Botón izquierdo */}
      <button
        type='button'
        data-testid='btn-left'
        onClick={() => scroll('left')}
        className='absolute hidden md:block -left-10 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black opacity-30 text-white rounded-full p-2 hover:opacity-80 z-10'
      >
        <ChevronLeft />
      </button>

      {/* Contenedor del slider */}
      <div
        ref={sliderRef}
        className='flex overflow-x-auto scroll-smooth space-x-4 p-4 gap-5'
      >
        {children}
      </div>

      {/* Botón derecho */}
      <button
        type='button'
        data-testid='btn-right'
        onClick={() => scroll('right')}
        className='hidden md:block absolute cursor-pointer -right-10 top-1/2 transform -translate-y-1/2 bg-black opacity-30 text-white rounded-full p-2 hover:opacity-80 z-10'
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default HorizontalSlider
