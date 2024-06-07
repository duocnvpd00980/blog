import BlogDetail from '@/features/BlogWidget/BlogDetail'

export default function Page({ params }: { params: { id: string } }) {
  return <BlogDetail id={params.id} />
}
