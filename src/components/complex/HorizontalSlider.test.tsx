import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import HorizontalSlider from './HorizontalSlider'

describe('HorizontalSlider component', () => {
  it('renderiza los botones y children', () => {
    render(
      <HorizontalSlider>
        <div data-testid='child'>Contenido</div>
      </HorizontalSlider>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('btn-left')).toBeInTheDocument()
    expect(screen.getByTestId('btn-right')).toBeInTheDocument()
  })

  //   it('llama scrollBy con desplazamiento correcto al click en botones', async () => {
  //     render(
  //       <HorizontalSlider>
  //         <div>Contenido</div>
  //       </HorizontalSlider>
  //     )

  //     // const slider =
  //     //   screen.getByRole('region') || screen.getByTestId('slider-container')
  //     // const leftButton = screen.getByRole('button', { name: /left/i })
  //     // const rightButton = screen.getByRole('button', { name: /right/i })

  //     // Como sliderRef apunta a un div sin role accesible, otra opción:
  //     // Capturar el div con overflow-x-auto por clase, o agregar un testid en el componente para selectores más fáciles
  //   })
})
