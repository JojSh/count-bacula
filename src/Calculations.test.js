import { calcUnits } from './Calculations';

it('correctly calculates UK units', () => {
  const abv = 5;
  const quantity = 330;
  expect(calcUnits(quantity, abv)).toEqual(1.65);
});
