export type Coords = [number, number]

// pending
// success
// error

export type ReqStatus = 'pending' | 'success' | 'error'

export interface PluginConfig {
  readonly selector: string
  perPage: number
  startIndex?: number
  draggable: boolean
}
