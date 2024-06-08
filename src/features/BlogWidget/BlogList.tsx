'use client'
import MediaList from '@/components/MediaList'
import BlogItem from './BlogItem'
import { useStores } from '@/store/useStores'
import BlogPagination from './BlogPagination'

const BlogList = () => {
  const blogs = useStores((state) => state.blog.data)
  return (
    <>
      <MediaList>
        {blogs.map((blogId, index) => (
          <BlogItem index={index} key={index} />
        ))}
      </MediaList>
      <BlogPagination />
    </>
  )
}

export default BlogList
