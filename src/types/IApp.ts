export interface ApiWrapper<T> {
  data: T
  isSuccess: boolean
  message: string
  statusCode: string
}
