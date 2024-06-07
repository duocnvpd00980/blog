'use client'
import Button from '@/components/Button'
import Search from '@/components/Search'
import StickyBar from '@/components/StickyBar'
import { useBlogs } from '@/hooks/useBlogs'
import BlogAdd from './BlogAdd'

const BogStickyBar = () => {
  const modal = useBlogs()
  return (
    <>
      <StickyBar>
        <Button onPress={modal.handleModalOpen} color="primary">
          Add New
        </Button>
        <Search />
      </StickyBar>
      <BlogAdd modal={modal} />
    </>
  )
}

export default BogStickyBar
