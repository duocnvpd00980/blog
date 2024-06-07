'use client'
import { useBlogAPIs } from '@/hooks/useBlogAPIs'
import { ReactNode } from 'react'

const BlogApp = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useBlogAPIs()
  if (isError) return null
  if (isLoading) return <h4>Load...</h4>
  return children
}

export default BlogApp
