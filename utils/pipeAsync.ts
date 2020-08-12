const pipeAsync = (...functions: any) => async <T>(input: T): Promise<T> =>
  functions.reduce(async (result: any, next: any) => next(await result), input)

export default pipeAsync
