import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('The button has the correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'change to blue'
  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toHaveStyle(`
    background-color: red;
  `)

});

test('Button and Checkbox initial conditions', () => {

  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toBeEnabled();

  const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });

  expect(checkboxElement).not.toBeChecked()


});


test('The button color changes to blue when is clicked', () => {
  render(<App />)

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  userEvent.click(buttonElement);
  
  expect(buttonElement).toHaveStyle(`
    background-color: blue;
  `);

  expect(buttonElement.textContent).toBe('Change to Red');

});

test('The button gets disabled when the Checkbox is Clicked', () => {

  render(<App />);

  const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });

  userEvent.click(checkboxElement);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  expect(buttonElement).toBeDisabled();

  userEvent.click(checkboxElement);

  expect(buttonElement).toBeEnabled();

});

test('When disabled, the button color goes gray and when enables reverst to red', () => {


  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  expect(buttonElement).toHaveStyle(`
  background-color: red;
`);

  userEvent.click(checkbox);

  expect(buttonElement).toHaveStyle(`
    background-color: gray;
  `);

  userEvent.click(checkbox);

  expect(buttonElement).toHaveStyle(`
    background-color: red;
  `);
  
});

test('When disabled, the button color goes gray and when enables reverst to blue', () => {


  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /change to blue/i });

  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  userEvent.click(buttonElement)

  expect(buttonElement).toHaveStyle(`
  background-color: blue;
`);

  userEvent.click(checkbox);

  expect(buttonElement).toHaveStyle(`
    background-color: gray;
  `);

  userEvent.click(checkbox);

  expect(buttonElement).toHaveStyle(`
    background-color: blue;
  `);
  
});






