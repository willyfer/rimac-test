import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CardPlan from './CardPlan'
import { TYPE_DESCOUNT, RECOMMENDED } from '../../utils'

const basePlan = {
  name: 'Plan Base',
  price: 100,
  description: ['Cobertura nacional', 'Atención 24/7'],
  age: 35
}

const recommendedPlan = {
  name: RECOMMENDED,
  price: 150,
  description: ['Incluye hospitalización', 'Atención domiciliaria'],
  age: 35
}

describe('CardPlan', () => {
  let handleSelect: ReturnType<typeof vi.fn>

  beforeEach(() => {
    handleSelect = vi.fn()
  })

  it('renderiza nombre, precio y descripciones del plan', () => {
    render(
      <CardPlan
        plan={basePlan}
        handleSelect={handleSelect}
        selectType='NORMAL'
      />
    )

    expect(screen.getByText(basePlan.name)).toBeInTheDocument()
    expect(screen.getByText(/\$100 al mes/i)).toBeInTheDocument()
    basePlan.description.forEach(desc => {
      expect(screen.getByText(desc)).toBeInTheDocument()
    })
  })

  it('muestra "Plan recomendado" si el plan es recomendado', () => {
    render(
      <CardPlan
        plan={recommendedPlan}
        handleSelect={handleSelect}
        selectType='NORMAL'
      />
    )

    expect(screen.getByText(/Plan recomendado/i)).toBeInTheDocument()
  })

  it('muestra precio tachado y precio con descuento si aplica TYPE_DESCOUNT', () => {
    render(
      <CardPlan
        plan={basePlan}
        handleSelect={handleSelect}
        selectType={TYPE_DESCOUNT}
      />
    )

    // Precio original tachado
    const tachado = screen.getByText(/\$100 al mes/i)
    expect(tachado).toHaveStyle('text-decoration: line-through')

    // Precio con descuento (5% menos)
    const descuento = screen.getByText(/\$95 al mes/i)
    expect(descuento).toBeInTheDocument()
  })

  it('llama a handleSelect al hacer clic en "Seleccionar Plan"', () => {
    render(
      <CardPlan
        plan={basePlan}
        handleSelect={handleSelect}
        selectType='NORMAL'
      />
    )

    const button = screen.getByRole('button', { name: /Seleccionar Plan/i })
    fireEvent.click(button)

    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith(basePlan)
  })
})
