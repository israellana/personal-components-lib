import { render } from '@testing-library/react'
import Input from '../Input'
import '@testing-library/jest-dom'

describe('Input component', () => {
  it('renders a input', () => {
    render(<Input />)
  })
})