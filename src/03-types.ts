import { Coords, ReqStatus } from './servises'

/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */

type ID = number | string

const userId: ID = 5

const postId: ID = 'qweqewq'

const coord: Coords = [50.456, 30.129]

// pending
// success
// error

const requestStatus: ReqStatus = 'error'

console.log(userId, postId, coord, requestStatus)
export {}
