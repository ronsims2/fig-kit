export interface HelloWorldPayload {
    payload: string
}

export function helloWorld(): HelloWorldPayload {
    return {payload: "hello world"}
}
