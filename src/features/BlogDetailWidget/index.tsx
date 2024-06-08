'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useBlogDetailAPI } from '@/hooks/useBlogDetailAPI'
import Image from 'next/image'
import Container from '@/components/Container'
import moment from 'moment'
import Link from 'next/link'

interface Props {
  id: string
}

const BlogDetailWidget = ({ id }: Props) => {
  const t = useTranslations('Index')
  const { data, isLoading, isError } = useBlogDetailAPI(id)
  if (isError) return <p>Error!</p>
  return (
    <Container>
      <h1 className="display-4">{t('title')}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </nav>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{data?.title}</h2>
          <br />
          <br />
          <div className="card mb-3">
            <Image
              src={data?.image as string}
              alt={data?.title as string}
              width={828}
              height={621}
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                {' '}
                <div
                  dangerouslySetInnerHTML={{ __html: data?.content as string }}
                />
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {moment(data?.createdAt).format('DD/MM/YYYY')}
                </small>
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default BlogDetailWidget
