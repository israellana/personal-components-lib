import { render } from '@testing-library/react'
import Banner from '../Banner'
import '@testing-library/jest-dom'

describe('Banner component', () => {
  it('renders a banner', () => {
    render(<Banner />)
  })
})