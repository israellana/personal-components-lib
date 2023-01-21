import { render } from '@testing-library/react'
import Textarea from '../Textarea'
import '@testing-library/jest-dom'

describe('Textarea component', () => {
  it('renders a textarea', () => {
    render(<Textarea />)
  })
})