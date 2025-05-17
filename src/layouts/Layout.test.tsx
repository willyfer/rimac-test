import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

// Mockear Outlet con vi.mock al tope
vi.mock('react-router-dom', () => {
  return {
    // Mantener importaciones reales excepto Outlet
    ...vi.importActual('react-router-dom'),
    Outlet: () => <div data-testid='outlet' />
  }
})

describe('Layout', () => {
  test('renderiza correctamente el logo, texto, teléfono y Outlet', () => {
    render(<Layout />)

    expect(screen.getByAltText(/Rimac Logo/i)).toBeInTheDocument()
    expect(screen.getByText(/¡Compra por este medio!/i)).toBeInTheDocument()
    expect(screen.getByText(/\(01\) 411 6001/)).toBeInTheDocument()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
  })
})
