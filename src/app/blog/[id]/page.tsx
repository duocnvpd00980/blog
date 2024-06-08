import BlogDetailWidget from '@/features/BlogDetailWidget'

export default function Page({ params }: { params: { id: string } }) {
  return <BlogDetailWidget id={params.id} />
}
