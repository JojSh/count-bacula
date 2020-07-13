export const calcUnits = (quantity, abv) => {
  return abv * quantity / 1000
}
export default { calcUnits }