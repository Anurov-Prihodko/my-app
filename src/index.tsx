// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import "./01-primitives";
// import "./02-arrays";
// import './03-types'
// import './04-interfaces'
// import './05-enums'
import './06-functions'
// import './07-classes'
import './api-service'
import { fetchForecast, fetchHistory, fetchSearch } from './api-service'

// fetchForecast().then((res) => console.log(res))
// fetchHistory('Kiev', '2022-02-01').then((res) => console.log(res))
fetchSearch().then((res) => console.log(res))

export {}
