export {}
/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temp: readonly number[] = [31, 30, 45, 67, 80]
// const temp1: Array<number> = [31, 30, 45, 67, 80]
const x: number[] = temp.map((j) => j + 1)

const coords: [number, number] = [50.451, 30.54]
// const entries = Object.entries({ a: 5, b: 10 })

// for (const entr of entries) {
// }

console.log(temp, coords, x)
