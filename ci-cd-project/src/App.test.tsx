import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('adds numbers correctly', () => {
  render(<App />)

  const firstInput = screen.getByLabelText('first-number')
  const secondInput = screen.getByLabelText('second-number')

  fireEvent.change(firstInput, { target: { value: '5' } })
  fireEvent.change(secondInput, { target: { value: '5' } })

  fireEvent.click(screen.getByText('Calculate'))

  expect(screen.getByText('Result: 10')).toBeInTheDocument()
})
