import { calcUnits, calcUnitsMetabBy } from './Calculations';

describe('calcUnits', () => {
  it('correctly calculates UK units', () => {
    const abv = 5;
    const quantity = 330;
    expect(calcUnits(quantity, abv)).toEqual(1.65);
  });
});


describe('calcUnitsMetabBy', () => {
  describe('when I have consumed 1.001 units at 9pm, and I\'m going to bed at 10pm', () => {
    it('returns 0.001 units metabolised by bed time', () => {
      const tenPMToday = new Date();
      tenPMToday.setHours(22)
      tenPMToday.setMinutes(0)
      const ninePMToday = new Date();
      ninePMToday.setHours(21)
      ninePMToday.setMinutes(0)
      expect(calcUnitsMetabBy(1.001, tenPMToday, ninePMToday)).toEqual(0.001);
    })
  });

  describe('when I have consumed 8.246 units at 6pm, and I\'m going to bed at 10pm', () => {
    it('returns 4.246 units metabolised by bed time', () => {
      const tenPMToday = new Date();
      tenPMToday.setHours(22)
      tenPMToday.setMinutes(0)
      const sixPMToday = new Date();
      sixPMToday.setHours(18)
      sixPMToday.setMinutes(0)
      expect(calcUnitsMetabBy(8.246, tenPMToday, sixPMToday)).toEqual(4.246);
    })
  });
})