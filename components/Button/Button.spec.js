import { render } from '@testing-library/react'
import Button from '../Button'
import '@testing-library/jest-dom'

describe('Button component', () => {
  it('renders a button', () => {
    render(<Button />)
  })
})