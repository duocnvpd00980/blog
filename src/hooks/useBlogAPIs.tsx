import ms from 'ms'
import blogService, { IBlog } from '@/services/blogService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { blogStore } from '@/store/blogStore'

interface FetchBlogsParams {
  page?: number
  limit?: number
  sortBy?: string
  order?: 'asc' | 'desc'
  search?: string
}

export const useBlogAPIs = () => {
  return {
    useFindMany: (
      limit = 3,
      page = 1,
      sortBy = 'id',
      order = 'asc',
      search = '',
    ) =>
      useQuery({
        queryKey: ['blogs'],
        queryFn: blogService.findMany(
          {
            params: {
              page,
              limit,
              sortBy,
              order,
              search,
            },
          },
          (data: IBlog[]) => {
            blogStore('blog', (_get, set) => {
              const ids = data.map((item) => item.id) ?? []
              set({ data, ids })
            })
          },
        ),
        staleTime: ms('4h'),
      }),
    useUpdateOne: () =>
      useMutation({
        mutationFn: blogService.updateOne,
        onSuccess: () => {
          toast.success('Blog added successfully!')
        },
        onError: () => {
          toast.error('Blog added successfully!')
        },
      }),
  }
}
