/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип;
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе
 */
type Add = (a: number, b: number) => number

const addExpretion = function (x: number, y: number): number {
  return x + y
}
const res = addExpretion(2, 3)

const arrow = (x: number, y: number): number => x + y
const res1 = arrow(4, 5)

const fn = (a: number, b: number, c: number, ...rest: number[]) => {}
fn(1, 2, 3, 44, 5, 5, 6, 76, 7, 7)

export {}
