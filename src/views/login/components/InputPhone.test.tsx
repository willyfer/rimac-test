import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useForm, FormProvider } from 'react-hook-form'
import InputPhone from './InputPhone'

// Componente de prueba con contexto de React Hook Form
const Wrapper = () => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <InputPhone />
        <button type='submit'>Enviar</button>
      </form>
    </FormProvider>
  )
}

describe('InputPhone', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza el input', () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Celular')
    expect(input).toBeInTheDocument()
  })

  it('muestra error si se envía vacío', async () => {
    render(<Wrapper />)
    const button = screen.getByRole('button', { name: /enviar/i })
    await userEvent.click(button)
    const errorMsg = await screen.findByText('El celular es requerido')
    expect(errorMsg).toBeInTheDocument()
  })

  it('muestra error si el número no es válido', async () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Celular')
    const button = screen.getByRole('button', { name: /enviar/i })

    await userEvent.type(input, '123456789')
    await userEvent.click(button)

    const errorMsg = await screen.findByText(/debe empezar con 9/i)
    expect(errorMsg).toBeInTheDocument()
  })

  it('acepta un número válido', async () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Celular')
    const button = screen.getByRole('button', { name: /enviar/i })

    await userEvent.type(input, '912345678')
    await userEvent.click(button)

    const errorMsg = screen.queryByText(/debe empezar con 9/i)
    expect(errorMsg).not.toBeInTheDocument()
  })

  it('limpia caracteres no numéricos', async () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Celular')

    await userEvent.type(input, '9123abc567!')
    expect((input as HTMLInputElement).value).toBe('9123567') // se eliminan letras y símbolos
  })
})
