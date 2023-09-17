import { render, screen } from '@testing-library/react-native'
import Header from './Header'

describe('Header', () => {
  it('should render the logo', () => {
    // When
    render(<Header />)
    const logo = screen.getByTestId('logo')

    // Then
    expect(logo).toBeDefined()
  })

  it('should render the add icon', () => {
    // When
    render(<Header />)
    const addIcon = screen.getByTestId('add-icon')

    // Then
    expect(addIcon).toBeDefined()
  })

  it('should render the user icon', () => {
    // When
    render(<Header />)
    const userIcon = screen.getByTestId('user-icon')

    // Then
    expect(userIcon).toBeDefined()
  })
})
