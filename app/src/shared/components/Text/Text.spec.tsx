import '@testing-library/jest-native/extend-expect'
import { render, screen } from '@testing-library/react-native'
import Text from './Text'

describe('Text', () => {
  it('should render the given text', () => {
    // Given
    const expectedText = 'a text'

    // When
    render(<Text>{expectedText}</Text>)
    const text = screen.getByText(expectedText)

    // Then
    expect(text).toHaveTextContent(expectedText)
  })
})
