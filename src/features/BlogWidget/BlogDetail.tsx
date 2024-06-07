import { useTranslations } from 'next-intl'

interface Props {
  id: string
}

const BlogDetail = ({ id }: Props) => {
  const t = useTranslations('Index')
  return (
    <div>
      <h1>
        Hello{id} {t('title')}
      </h1>
    </div>
  )
}

export default BlogDetail
