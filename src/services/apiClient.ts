import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface FetchResponse<T> {
  data: T
}

const instance = axios.create({
  // baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io/',
  baseURL: 'https://663983fe1ae792804bec013c.mockapi.io/api/',
  headers: { 'X-Custom-Header': 'foobar' },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  findMany = (config: AxiosRequestConfig, store: (data: T[]) => void) => () =>
    instance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res: AxiosResponse<FetchResponse<T>>) => {
        store(res.data as unknown as T[])
        return res.data
      })

  updateOne = (data: T) => {
    return instance.post<T>(this.endpoint, data).then((res) => res.data)
  }
  findOne = (id: string | number) => () =>
    instance.get<T>(this.endpoint + `/${id}`).then((res) => res.data)
}

export default APIClient
