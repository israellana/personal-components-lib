import { render } from '@testing-library/react'
import Typography from '../Typography'
import '@testing-library/jest-dom'

describe('Typography component', () => {
  it('renders a typography', () => {
    render(<Typography />)
  })
})