'use client'
import MediaList from '@/components/MediaList'
import BlogItem from './BlogItem'
import { useBlogStore } from '@/store/useBlogStore'

const BlogList = () => {
  const blogs = useBlogStore((state) => state.blog.ids)
  return (
    <MediaList>
      {blogs.map((blogId, index) => (
        <BlogItem index={index} key={blogId} />
      ))}
    </MediaList>
  )
}

export default BlogList
