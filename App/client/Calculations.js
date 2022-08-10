export function calcUnits (quantity, abv) {
  return abv * quantity / 1000
}

export function calcUnitsMetabBy (unitsInBody, timeTo, timeFrom) {
  const SEC_PER_HOUR = 3600
  const UNITS_METAB_PER_SEC = (1 / SEC_PER_HOUR) // 0.0002777777777777778

  const secondsToBedtime = getSecondsTo(timeTo, timeFrom)
  const unitsRemainingAtBedTime = unitsInBody - (secondsToBedtime * UNITS_METAB_PER_SEC)
  return Number(unitsRemainingAtBedTime.toFixed(2))
}

function flattenTime (dateObject) {
  dateObject.setSeconds(0)
  dateObject.setMilliseconds(0)
  return dateObject
}

function getSecondsTo (timeTo, timeFrom) {
  const secToBedTimeFloat = (flattenTime(timeTo) - flattenTime(timeFrom)) / 1000
  return Math.round(secToBedTimeFloat)
}
