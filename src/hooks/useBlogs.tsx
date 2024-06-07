import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import blogService from '@/services/blogService'

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.findMany,
    staleTime: ms('4h'),
  })
}
