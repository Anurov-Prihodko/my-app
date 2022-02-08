const BASE_URL = 'http://api.weatherapi.com/v1/'
const API_KEY = 'b88614b3fb684e8b996104153220302'

// http://api.weatherapi.com/v1/forecast.json?key=9ec4f790dbff4e13ab2113712220702&q=London&days=1&aqi=no&alerts=no

type repayObjInArr = Array<object>

type ForecastApiType = (
  town?: string,
  days?: number,
  aqi?: string,
  alerts?: string
) => Promise<repayObjInArr>

type HistoryApiType = (town?: string, date?: string) => Promise<object>

type SearchApiType = (town?: string) => Promise<repayObjInArr>

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

const time = new Date().toLocaleDateString().split('.').reverse().join('-')

// http://api.weatherapi.com/v1/history.json?key=b88614b3fb684e8b996104153220302&q=Kiev&dt=2022-02-01

export const fetchHistory: HistoryApiType = (town = 'Kiev', date = time) => {
  return fetch(`${BASE_URL}history.json?key=${API_KEY}&q=${town}&dt=${date}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

// http://api.weatherapi.com/v1/search.json?key=b88614b3fb684e8b996104153220302&q=Kiev

export const fetchSearch: SearchApiType = (town = 'Kiev') => {
  return fetch(`${BASE_URL}search.json?key=${API_KEY}&q=${town}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
