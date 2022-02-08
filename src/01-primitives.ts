export {}
/*
 * Примитивные типы
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */

let age: number = 5
age = 6

const name = 'qweqwe'

let value: number | string = 10
value = 'qweqweqwe'

console.log(age, name, value)
