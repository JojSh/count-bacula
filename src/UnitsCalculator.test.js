import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UnitsCalculator from './UnitsCalculator';

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


it('displays the expected calculated value when caulculate units is clicked', () => {
  const unitsCalculator = render(<UnitsCalculator />);
  const abvInput = unitsCalculator.getByLabelText('abv-input')
  const quantityInput = unitsCalculator.getByLabelText('quantity-input')
  fireEvent.change(quantityInput, { target: { value: '330' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  fireEvent.click(screen.getByText('Calculate units'))
  const displayedUnits = screen.getByLabelText('units-display')
  expect(displayedUnits).toHaveTextContent('1.65')
});


