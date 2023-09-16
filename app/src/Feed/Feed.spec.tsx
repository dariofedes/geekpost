import { render, screen } from '@testing-library/react-native'
import Feed from './Feed'

describe('Feed', () => {
  it('should render all the posts', async () => {
    // When
    render(<Feed />)
    const posts = await screen.findAllByTestId('post')

    // Then
    expect(posts).toHaveLength(6)
  })
})
