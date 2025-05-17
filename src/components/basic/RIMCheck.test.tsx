import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from './RIMCheck'
import { describe } from 'node:test'

describe('Button component', () => {
  it('debería renderizar con el texto proporcionado', () => {
    render(<Checkbox label='Info' />)
    expect(screen.getByText('Info')).toBeInTheDocument()
  })
  it('checkbox está desmarcado por defecto', () => {
    render(<Checkbox label='Test' />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })

  it('checkbox está marcado si checked=true', () => {
    render(<Checkbox label='Test' checked={true} />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })
  it('llama a onChange al hacer click', async () => {
    const onChange = vi.fn()
    render(<Checkbox label='Test' onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')

    const user = userEvent.setup()
    await user.click(checkbox)

    expect(onChange).toHaveBeenCalled()
  })
  //   it('debería llamar a la función onChange cuando se hace clic', async () => {
  //     const user = userEvent.setup()
  //     const handleClick = vi.fn()

  //     render(<Check label='' />)
  //     await user.click(screen.getByText('Click'))

  //     expect(handleClick).toHaveBeenCalledTimes(1)
  //   })
})
