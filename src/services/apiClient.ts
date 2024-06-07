import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface FetchResponse<T> {
  data: T
}

const instance = axios.create({
  baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io/',
  headers: { 'X-Custom-Header': 'foobar' },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  findMany = (store: (data: T) => void) => (config: AxiosRequestConfig) =>
    instance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res: AxiosResponse<FetchResponse<T>>) => {
        store(res.data as T)
        console.log(res.data)
        return res.data ?? []
      })
      .catch((err) => console.log(err))

  findOne = (id: number | string) =>
    instance.get<T>(this.endpoint + '/' + id).then((res) => res.data)
}

export default APIClient
