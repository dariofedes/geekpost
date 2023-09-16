import '@testing-library/jest-native/extend-expect'
import { render, screen } from '@testing-library/react-native'
import Post from './Post'

describe('Post', () => {
  it('should show the post authors name', () => {
    // Given
    const expectedAuthorName = 'an author'
    const postData = {
      authorName: expectedAuthorName,
      description: 'a description',
      image: 'an image',
    }

    // When
    render(<Post data={postData} />)
    const postAuthorName = screen.getByText(expectedAuthorName)

    // Then
    expect(postAuthorName).toHaveTextContent(expectedAuthorName)
  })

  it('should show the post description', () => {
    // Given
    const expectedDescription = 'post description'
    const postData = {
      authorName: 'an author',
      description: expectedDescription,
      image: 'an image',
    }

    // When
    render(<Post data={postData} />)
    const postDescription = screen.getByText(expectedDescription)

    // Then
    expect(postDescription).toHaveTextContent(expectedDescription)
  })

  it('should show an image with the correct uri', () => {
    // Given
    const expectedImageUri = 'anURI'
    const postData = {
      authorName: 'an author',
      description: 'a description',
      image: expectedImageUri,
    }

    // When
    render(<Post data={postData} />)
    const image = screen.getByTestId('post-image')

    // Then
    expect(image.props.source.uri).toBe(expectedImageUri)
  })
})
