import ms from 'ms'
import { useQuery } from '@tanstack/react-query'
import blogService, { IBlog } from '@/services/blogService'
import { useStateStore } from '@/store/useStateStore'

export const useBlogAPIs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.findMany((data: IBlog[]) => {
      useStateStore('blog', (get, set) => {
        const ids = data.map((item) => item.id) ?? []
        set({ data, ids })
      })
    }),
    staleTime: ms('4h'),
  })
}
