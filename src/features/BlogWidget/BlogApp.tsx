'use client'
import { useBlogs } from '@/hooks/useBlogs'
import { ReactNode } from 'react'

const BlogApp = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useBlogs()
  if (isError) return null
  if (isLoading) return <h4>Load...</h4>
  return children
}

export default BlogApp
