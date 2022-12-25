import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Working on it! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Working on it!/i);
  expect(linkElement).toBeInTheDocument();
});
