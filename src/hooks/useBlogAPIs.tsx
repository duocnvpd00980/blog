import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import blogService, { IBlog } from '@/services/blogService'
import { blogStore } from '@/store/blogStore'

export const useBlogAPIs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.findMany((data: IBlog[]) => {
      blogStore('blog', (get, set) => {
        const ids = data.map((item) => item.id) ?? []
        set({ data, ids })
      })
    }),
    staleTime: ms('4h'),
  })
}
