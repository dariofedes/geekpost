import '@testing-library/jest-native/extend-expect'
import { render, screen } from '@testing-library/react-native'
import Post from './Post'

describe('Post', () => {
  it('should show the post authors name', async () => {
    // Given
    const expectedAuthorName = 'an author'
    const postData = {
      authorName: expectedAuthorName,
    }

    // When
    render(<Post data={postData} />)
    const postAuthorName = screen.getByText(expectedAuthorName)

    // Then
    expect(postAuthorName).toBeVisible()
  })

  it('should show the post description', async () => {
    // Given
    const expectedDescription = 'post description'
    const postData = {
      authorName: 'an author',
      description: expectedDescription,
    }

    // When
    render(<Post data={postData} />)
    const postDescription = screen.getByText(expectedDescription)

    // Then
    expect(postDescription).toBeVisible()
  })

  it('should show an image with the correct uri', async () => {
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
