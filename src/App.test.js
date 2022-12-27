import { render, screen } from '@testing-library/react';
import './i18nTesting'
import App from './App';

test('renders Working on it!', () => {
  render(<App />);
  const work = screen.getByText(/working on it/i);
  const welcome = screen.getByText(/welcome to/i);
  expect(work).toBeInTheDocument();
  expect(welcome).toBeInTheDocument();
});
