/*
 * Интерфейсы
 *  - Конструкция `interface`
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */

import { PluginConfig } from './servises'

const config: PluginConfig = {
  selector: '#plugin-1',
  perPage: 2,
  //   startIndex: 0,
  draggable: false,
}

interface Employees {
  [key: string]: number
}

const employees: Employees = {
  mango: 5,
  poly: 2,
  ajax: 6,
  wiki: 12,
}

const entries = Object.entries(employees)
let bestEmplyoeeName = ''
let bestEmplyoeeProIdx = 0

for (const [name, value] of entries) {
  if (bestEmplyoeeProIdx <= value) {
    bestEmplyoeeName = name
    bestEmplyoeeProIdx = value
  }
}

console.log(
  `Dev ${bestEmplyoeeName}, have finished ${bestEmplyoeeProIdx} tasks!`
)

// const value: number[] = Object.values(employees)
// const el = Math.max.apply(null, value)
// const el = Math.max(...value)
// const el2 = value.reduce((acc, num) => (acc > num ? acc : num))

// console.log(config, employees, value)
// console.log(el2)

export {}
