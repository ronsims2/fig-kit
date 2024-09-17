import cloneDeep from 'lodash-es/cloneDeep'
export interface HelloWorldPayload {
    payload: string
}

export function helloWorld(): HelloWorldPayload {
    return cloneDeep({payload: "hello world"})
}
