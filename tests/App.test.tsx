import { render, screen } from '@testing-library/react';
import App from '../src/App';
// import addTwoNumbers from '../src/addTwoNumbers';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/child/i);
  for (const linkElement of linkElements) expect(linkElement).toBeInTheDocument();
  // expect(addTwoNumbers(2,3)).toBe(5);
});
