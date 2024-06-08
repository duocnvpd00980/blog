import blogService from '@/services/blogService'
import { useQuery } from '@tanstack/react-query'

export const useBlogDetailAPI = (id: string) =>
  useQuery({
    queryKey: ['blog-detail', id],
    queryFn: blogService.findOne(id),
    refetchOnWindowFocus: false,
  })
