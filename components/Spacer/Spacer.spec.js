import { render } from '@testing-library/react'
import Spacer from '../Spacer'
import '@testing-library/jest-dom'

describe('Spacer component', () => {
  it('renders a spacer', () => {
    render(<Spacer />)
  })
})