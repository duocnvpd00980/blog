'use client'
import { useEffect, useState } from 'react'

export const useBlogs = () => {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto'
    document.body.style.marginRight = modal ? '17px' : '0px'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modal])
  return {
    isModal: modal,
    handleModalOpen: () => setModal(true),
    handleModalClose: () => setModal(false),
  }
}
