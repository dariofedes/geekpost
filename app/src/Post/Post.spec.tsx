import '@testing-library/jest-native/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Post from './Post';

describe('Post', () => {
  it('should render Hello', async () => {
    render(<Post />);

    const helloText = screen.getByText('Hello');

    expect(helloText).toBeVisible();
  });
});
