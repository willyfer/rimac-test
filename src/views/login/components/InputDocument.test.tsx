import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useForm, FormProvider } from 'react-hook-form'
import InputDocument from './InputDocument'

const Wrapper = () => {
  const methods = useForm({
    defaultValues: {
      documentType: 'DNI',
      document: ''
    }
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <InputDocument />
        <button type='submit'>Enviar</button>
      </form>
    </FormProvider>
  )
}

describe('InputDocument', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza select y input correctamente', () => {
    render(<Wrapper />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Documento')).toBeInTheDocument()
  })

  it('muestra errores si los campos están vacíos', async () => {
    render(<Wrapper />)
    const submit = screen.getByRole('button', { name: /enviar/i })
    await userEvent.click(submit)

    expect(
      await screen.findByText(/Nro de Documento es requerido/i)
    ).toBeInTheDocument()
  })

  it('cambia longitud máxima del input según tipo de documento', async () => {
    render(<Wrapper />)
    const select = screen.getByRole('combobox')
    const input = screen.getByPlaceholderText('Documento') as HTMLInputElement

    await userEvent.selectOptions(select, 'CE')
    await userEvent.type(input, '1234567890123') // más de 11

    // Debería cortar a 11 dígitos
    expect(input.value.length).toBeLessThanOrEqual(11)
  })

  it('limpia letras y símbolos al escribir', async () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Documento') as HTMLInputElement

    await userEvent.type(input, '123abc!456')
    expect(input.value).toBe('123456')
  })

  it('acepta un documento válido para DNI', async () => {
    render(<Wrapper />)
    const input = screen.getByPlaceholderText('Documento')
    const submit = screen.getByRole('button', { name: /enviar/i })

    await userEvent.type(input, '12345678') // 8 dígitos
    await userEvent.click(submit)

    expect(
      screen.queryByText(/Nro de Documento es requerido/i)
    ).not.toBeInTheDocument()
  })
})
