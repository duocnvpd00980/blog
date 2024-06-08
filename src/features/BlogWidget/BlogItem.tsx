import MediaObject from '@/components/MediaObject'
import { useStores } from '@/store/useStores'
interface Props {
  index: number
}
const BlogItem = ({ index }: Props) => {
  const blog = useStores((state) => state.blog.data[index])
  return <MediaObject data={blog} />
}

export default BlogItem
