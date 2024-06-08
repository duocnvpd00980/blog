'use client'
import Button from '@/components/Button'
import Search from '@/components/Search'
import StickyBar from '@/components/StickyBar'
import { useBlogs } from '@/hooks/useBlogs'
import BlogAdd from './BlogAdd'

const BogStickyBar = () => {
  const blog = useBlogs()
  return (
    <>
      <StickyBar>
        <Button onPress={blog.handleModalOpen} color="primary">
          Add New
        </Button>
        <Button onPress={blog.handleModalSortOrder} color="secondary" outline>
          {blog.textSort}
        </Button>
        <Search
          onSearch={blog.handleModalSearch}
          onValue={blog.changeSearchText}
        />
      </StickyBar>
      <BlogAdd modal={blog} />
    </>
  )
}

export default BogStickyBar
