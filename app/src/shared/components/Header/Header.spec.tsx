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

  it('should render the add nav button', () => {
    // When
    render(<Header />)
    const addIcon = screen.getByTestId('add-post-nav-button')

    // Then
    expect(addIcon).toBeDefined()
  })

  it('should render the profile nav button', () => {
    // When
    render(<Header />)
    const userIcon = screen.getByTestId('profile-nav-button')

    // Then
    expect(userIcon).toBeDefined()
  })
})
