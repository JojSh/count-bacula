import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UnitsCalculator from './UnitsCalculator';
import 'regenerator-runtime/runtime';

describe('when provided the correct input values', () => {
  it('displays the quantity value as expected', () => {
    const unitsCalculator = render(<UnitsCalculator />);
    const quantityInput = unitsCalculator.getByLabelText('quantity-input')
    fireEvent.change(quantityInput, { target: { value: '330' } })
    expect(quantityInput.value).toBe('330')
  });
  
  it('displays the abv value as expected', () => {
    const unitsCalculator = render(<UnitsCalculator />);
    const abvInput = unitsCalculator.getByLabelText('abv-input')
    fireEvent.change(abvInput, { target: { value: '5' } })
    expect(abvInput.value).toBe('5')
  });
})


it('displays the expected calculated value when abv and quantity fields both have values', async () => {
  const unitsCalculator = render(<UnitsCalculator />);
  const abvInput = unitsCalculator.getByLabelText('abv-input')
  const quantityInput = unitsCalculator.getByLabelText('quantity-input')
  fireEvent.change(quantityInput, { target: { value: '330' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  await waitFor(() => screen.getByLabelText('units-display'))
  expect(screen.getByLabelText('units-display')).toHaveTextContent('1.65')
});

it('adds and displays a drink\'s units to total when "Add drink" button is clicked ', async () => {
  const unitsCalculator = render(<UnitsCalculator />);
  const abvInput = unitsCalculator.getByLabelText('abv-input')
  const quantityInput = unitsCalculator.getByLabelText('quantity-input')
  fireEvent.change(quantityInput, { target: { value: '440' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  fireEvent.click(screen.getByText('Add drink'))
  await waitFor(() => screen.getByLabelText('total-units'))
  expect(screen.getByLabelText('total-units')).toHaveTextContent('2.2')
});

it('adds total units for multiple saved drinks', async () => {
  const unitsCalculator = render(<UnitsCalculator />);
  const abvInput = unitsCalculator.getByLabelText('abv-input')
  const quantityInput = unitsCalculator.getByLabelText('quantity-input')

  fireEvent.change(quantityInput, { target: { value: '440' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  fireEvent.click(screen.getByText('Add drink'))

  fireEvent.change(quantityInput, { target: { value: '330' } })
  fireEvent.change(abvInput, { target: { value: '8' } })
  fireEvent.click(screen.getByText('Add drink'))

  await waitFor(() => screen.getByLabelText('total-units'))
  expect(screen.getByLabelText('total-units')).toHaveTextContent('4.84')
});