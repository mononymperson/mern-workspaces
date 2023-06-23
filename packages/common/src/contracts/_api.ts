export interface ApiResponse<T> {
  code: 200 | 400
  message: string
  data: T
  error?: string[]
}
