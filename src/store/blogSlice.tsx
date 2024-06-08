import { IBlog } from '@/services/blogService'
import { StateCreator } from 'zustand'

export type TypeSortBy = 'id' | 'desc'
export type TypeSortOrder = 'asc' | 'desc'
export type TypeBlog = {
  id?: string
  ids?: string[]
  data: IBlog[]
  page: number
  limit: number
  sortBy: TypeSortBy
  sortOrder: TypeSortOrder
  searchText: string
}
export interface IBlogStates {
  blog: TypeBlog
}
export interface IBlogActions extends IBlogStates {
  setSearchText: (searchText: string) => void
  setSortOrder: (sortOrder: TypeSortOrder) => void
  setSortBy: (sortBy: TypeSortBy) => void
  setData: (data: IBlog[]) => void
  setPage: (page: number) => void
}
export interface IBlogSlice extends IBlogActions {}

const initialState: IBlogStates = {
  blog: {
    id: '121212',
    ids: [],
    data: [],
    page: 1,
    limit: 3,
    sortBy: 'id',
    sortOrder: 'asc',
    searchText: '',
  },
}

const blogSlice: StateCreator<IBlogSlice> = (set) => ({
  ...initialState,
  setPage: (page) =>
    set((state) => ({
      blog: {
        ...state.blog,
        page,
      },
    })),
  setData: (data) =>
    set((state) => ({
      blog: {
        ...state.blog,
        data,
      },
    })),
  setSearchText: (searchText) =>
    set((state) => ({
      blog: {
        ...state.blog,
        searchText,
      },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      blog: {
        ...state.blog,
        sortOrder,
      },
    })),
  setSortBy: (sortBy) =>
    set((state) => ({
      blog: {
        ...state.blog,
        sortBy,
      },
    })),
})

export default blogSlice

// export default {
//   Item: (item: number) => stores(useShallow((state) => state[KEY_SKILL][item])),
// }
