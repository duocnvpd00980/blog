import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IBlog } from '../services/blogService'

type State = {
  blog: {
    data: IBlog[]
    ids: string[]
  }
}

type Actions = {
  updateBlog: (newBlog: []) => void
}

export const useBlogStore = create<State & Actions>()(
  devtools((set) => ({
    blog: {
      data: [],
      ids: [],
    },
    updateBlog: (newBlog) =>
      set((state) => ({
        blog: {
          ...state.blog,
          data: newBlog,
        },
      })),
  })),
)
