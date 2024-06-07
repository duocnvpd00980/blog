import Container from '@/components/Container'
import BlogApp from './BlogApp'
import BlogHeading from './BlogHeading'
import BlogList from './BlogList'
import BogStickyBar from './BogStickyBar'

const BlogWidget = () => {
  return (
    <Container>
      <BlogHeading />
      <BogStickyBar />
      <BlogApp>
        <BlogList />
      </BlogApp>
    </Container>
  )
}

export default BlogWidget
