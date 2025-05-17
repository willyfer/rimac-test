import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CardType from './CardType'

describe('CardType', () => {
  const props = {
    title: 'Plan Básico',
    description: 'Ideal para emergencias simples',
    img: 'test-img.svg',
    selected: false,
    onPress: vi.fn()
  }

  it('renderiza título, descripción e imagen', () => {
    render(<CardType {...props} />)

    expect(screen.getAllByText(props.title)[0]).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()

    expect(screen.getByAltText('img_card_type')).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('muestra ícono Circle cuando no está seleccionado', () => {
    render(<CardType {...props} />)

    expect(screen.getByTestId('lucide-circle')).toBeInTheDocument()
  })

  it('muestra ícono CheckCircle2 cuando está seleccionado', () => {
    render(<CardType {...props} selected={true} />)

    expect(screen.getByTestId('lucide-check-circle-2')).toBeInTheDocument()
  })

  it('llama a onPress con el título al hacer clic', () => {
    render(<CardType {...props} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(props.onPress).toHaveBeenCalledTimes(1)
    expect(props.onPress).toHaveBeenCalledWith(props.title)
  })
})
