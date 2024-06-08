'use client'
import { useStores } from '@/store/useStores'
import { useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useBlogs = () => {
  const store = useStores((state) => state)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [textSort, setTextSort] = useState('Sort Ascending')
  const queryClient = useQueryClient()
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto'
    document.body.style.marginRight = modal ? '17px' : '0px'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modal])
  return {
    changeSearchText: (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    },
    textSort,
    isModal: modal,
    handleModalOpen: () => setModal(true),
    handleModalClose: () => setModal(false),
    handleModalSortBy: () => {
      const newSortOrder = store.blog.sortOrder === 'asc' ? 'desc' : 'asc'
      setTextSort(newSortOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending')
      store.setSortOrder(newSortOrder)
      toast.info('Sorting....!')
    },
    handleModalSortOrder: () => {
      const newSortOrder = store.blog.sortOrder === 'asc' ? 'desc' : 'asc'
      setTextSort(newSortOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending')
      store.setSortOrder(newSortOrder)
      toast.info('Sorting....!')
    },
    handleModalSearch: async () => {
      store.setSearchText(search)
      await queryClient.refetchQueries({
        queryKey: ['blogs'],
        type: 'active',
      })
      toast.info('Searching....!')
    },
  }
}
