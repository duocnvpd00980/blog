import APIClient from './apiClient'

export interface IBlogs {
  createdAt: string
  title: string
  image: string
  content: string
  id: string
  description: string
}

export default new APIClient<IBlogs[]>('blogs')
