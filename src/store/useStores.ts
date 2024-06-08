import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import blogSlice, { IBlogSlice } from './blogSlice'

export const useStores = create<IBlogSlice>()(
  devtools(
    (...create) => ({
      ...blogSlice(...create),
    }),
    { name: 'BlogStore' },
  ),
)
