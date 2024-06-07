import MediaObject from '@/components/MediaObject'
import { useBlogStore } from '@/store/useBlogStore'
interface Props {
  index: number
}
const BlogItem = ({ index }: Props) => {
  const blog = useBlogStore((state) => state.blog.data[index])
  return <MediaObject data={blog} />
}

export default BlogItem
