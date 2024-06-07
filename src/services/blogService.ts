import APIClient from './apiClient'

export interface IBlog {
  id?: string
  createdAt?: string
  title: string
  image: string
  description: string
  content: string
}

export default new APIClient<IBlog>('blogs')
