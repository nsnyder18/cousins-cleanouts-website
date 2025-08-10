import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders business name and key sections', () => {
  render(<App />);
  expect(screen.getByText('Cousins Cleanouts')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /what we do/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /dump trailer rental/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /typical pricing/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /recent jobs/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /neighbors love us/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /get a free quote/i })).toBeInTheDocument();
});

test('has call and sms links', () => {
  render(<App />);
  const callLinks = screen.getAllByRole('link', { name: /call/i });
  expect(callLinks[0]).toHaveAttribute('href', 'tel:+17153047663');
  const textLinks = screen.getAllByRole('link', { name: /text/i });
  expect(textLinks[0]).toHaveAttribute('href', 'sms:+17153047663');
});

test('does not render payment or deposit buttons', () => {
  render(<App />);
  expect(screen.queryByText(/deposit/i)).toBeNull();
  expect(screen.queryByText(/pay/i)).toBeNull();
  expect(screen.queryByText(/stripe/i)).toBeNull();
});
