import Container from '@/components/Container'
import BlogApp from './BlogApp'
import BlogHeading from './BlogHeading'
import BlogList from './BlogList'

const BlogWidget = () => {
  return (
    <Container>
      <BlogApp>
        <BlogHeading />
        <BlogList />
      </BlogApp>
    </Container>
  )
}

export default BlogWidget
