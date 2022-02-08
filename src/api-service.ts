const BASE_URL = 'http://api.weatherapi.com/v1/'
const API_KEY = 'b88614b3fb684e8b996104153220302'
const DATE_NOW_STR = new Date()
  .toLocaleDateString()
  .split('.')
  .reverse()
  .join('-')

// === TS types ===

type repayObjInArr = Array<object>

type ForecastApiType = (
  town?: string,
  days?: number,
  aqi?: string,
  alerts?: string
) => Promise<repayObjInArr>

type HistoryApiType = (town?: string, date?: string) => Promise<object>

type SearchApiType = (town?: string) => Promise<repayObjInArr>

// === END TS types ===

export const fetchForecast: ForecastApiType = (
  town = 'Kiev',
  days = 3,
  aqi = 'no',
  alerts = 'no'
) => {
  return fetch(
    `${BASE_URL}forecast.json?key=${API_KEY}&q=${town}&days=${days}&aqi=${aqi}&alerts=${alerts}`
  )
    .then((res) => res.json())
    .then((res) => res.forecast.forecastday)
    .catch((err) => console.log(err))
}

export const fetchHistory: HistoryApiType = (
  town = 'Kiev',
  date = DATE_NOW_STR
) => {
  return fetch(`${BASE_URL}history.json?key=${API_KEY}&q=${town}&dt=${date}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const fetchSearch: SearchApiType = (town = 'Kiev') => {
  return fetch(`${BASE_URL}search.json?key=${API_KEY}&q=${town}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
