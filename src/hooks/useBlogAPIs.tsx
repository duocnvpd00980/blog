import blogService, { IBlog } from '@/services/blogService'
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useShallow } from 'zustand/react/shallow'
import { useStores } from '@/store/useStores'
import { IBlogSlice } from '@/store/blogSlice'

export const useBlogAPIs = () => {
  const { blog, setData } = useStores<IBlogSlice>(useShallow((state) => state))
  const queryClient = useQueryClient()
  const payload = {
    params: {
      page: blog.page,
      limit: blog.limit,
      sortBy: blog.sortBy,
      order: blog.sortOrder,
      search: blog.searchText,
    },
  }

  return {
    useFindMany: () =>
      useQuery({
        queryKey: [
          'blogs',
          blog.page,
          blog.limit,
          blog.sortBy,
          blog.sortOrder,
          blog.searchText,
        ],
        queryFn: blogService.findMany(payload, (data: IBlog[]) => {
          queryClient.refetchQueries({
            queryKey: ['blogs'],
            type: 'active',
          })
          setData(data)
        }),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
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
