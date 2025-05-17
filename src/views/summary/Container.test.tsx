import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Container from './Container'
import type { Plan } from '../../modules/plan/domain/models/Plan'
import type { User } from '../../modules/user/domain/models/User'
import type { OtherProps } from '../../store/slices/UserSlice'

// Mockear imágenes para evitar errores de importación
vi.mock('../../assets/common/line.svg', () => ({
  default: null
}))
vi.mock('../../assets/common/gl_family-24x24.svg', () => ({
  default: null
}))
describe('Container component', () => {
  const mockHandleBack = vi.fn()
  const user: User & OtherProps = {
    name: 'Juan',
    lastName: 'Pérez',
    document: '12345678',
    phone: '987654321',
    documentType: 'DNI',
    age: 35,
    commercial: true,
    privacy: true,
    birthDay: ''
  }
  const plan: Plan = {
    name: 'Plan Básico',
    price: 120,
    age: 80,
    description: ['desc']
  }

  beforeEach(() => {
    mockHandleBack.mockClear()
  })

  test('renderiza datos del usuario y plan, y botón funciona', () => {
    render(<Container handleBack={mockHandleBack} user={user} plan={plan} />)

    // Verificar texto usuario y plan
    expect(screen.getByText(/Juan Pérez/)).toBeInTheDocument()
    expect(screen.getByText(/DNI : 12345678/)).toBeInTheDocument()
    expect(screen.getByText(/Celular: 51987654321/)).toBeInTheDocument()
    expect(screen.getByText(/Plan Básico/)).toBeInTheDocument()
    expect(screen.getByText(/Costo del Plan: \$120 al mes/)).toBeInTheDocument()

    // Verificar botón "Volver" y que llama handleBack al hacer click
    const button = screen.getByRole('button', { name: /volver/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(mockHandleBack).toHaveBeenCalledTimes(1)
  })
})
