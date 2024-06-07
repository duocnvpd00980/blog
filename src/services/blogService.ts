import APIClient from './apiClient'

export interface IBlog {
  createdAt: string
  title: string
  image: string
  content: string
  id: string
  description: string
}

export default new APIClient<IBlog[]>('blogs')
