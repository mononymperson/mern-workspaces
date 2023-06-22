export interface ApiResponse<T = null> {
  code: 200 | 400
  message: string
  data: T
  error?: string[]
}
