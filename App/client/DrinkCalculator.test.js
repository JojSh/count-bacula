import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime';
import DrinkCalculator from './DrinkCalculator';

describe('when provided the correct input values', () => {
  it('displays the quantity value as expected', () => {
    const drinkCalculator = render(<DrinkCalculator />)
    const quantityInput = drinkCalculator.getByLabelText('quantity-input')

    fireEvent.change(quantityInput, { target: { value: '330' } })

    expect(quantityInput.value).toBe('330')
  });
  
  it('displays the abv value as expected', () => {
    const drinkCalculator = render(<DrinkCalculator />);
    const abvInput = drinkCalculator.getByLabelText('abv-input')

    fireEvent.change(abvInput, { target: { value: '5' } })

    expect(abvInput.value).toBe('5')
  });
})


it('displays the expected calculated value when abv and quantity fields both have values', async () => {
  const drinkCalculator = render(<DrinkCalculator />)
  const abvInput = drinkCalculator.getByLabelText('abv-input')
  const quantityInput = drinkCalculator.getByLabelText('quantity-input')

  fireEvent.change(quantityInput, { target: { value: '330' } })
  fireEvent.change(abvInput, { target: { value: '5' } })

  await waitFor(() => screen.getByLabelText('units-display'))
  expect(screen.getByLabelText('units-display')).toHaveTextContent('1.65')
});