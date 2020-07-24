export function calcUnits (quantity, abv) {
  return abv * quantity / 1000
}

export function calcUnitsMetabBy (unitsInBody, timeTo, timeFrom) {
  const SEC_PER_HOUR = 3600
  const UNITS_METAB_PER_SEC = (1 / SEC_PER_HOUR) // 0.0002777777777777778

  const secondsToBedtime = getSecondsTo(timeTo, timeFrom)
  const unitsRemainingAtBedTime = unitsInBody - (secondsToBedtime * UNITS_METAB_PER_SEC)
  return Number(unitsRemainingAtBedTime.toFixed(3))
}

function getSecondsTo (timeTo, timeFrom) {
  return (timeTo - timeFrom) / 1000
}