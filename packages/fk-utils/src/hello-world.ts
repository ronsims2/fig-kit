import { cloneDeep } from 'lodash-es'

export interface HelloWorldPayload {
  payload: string
}

export function helloWorld(): HelloWorldPayload {
  const payload: HelloWorldPayload = { payload: 'hello world' }
  return cloneDeep(payload)
}
