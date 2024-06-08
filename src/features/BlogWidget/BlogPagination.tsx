'use client'
import { Fragment } from 'react'
import _ from 'lodash'
import { debounce } from 'lodash'
import { useStores } from '@/store/useStores'
import { IBlogSlice } from '@/store/blogSlice'

const BlogPagination = () => {
  const { blog, setPage } = useStores<IBlogSlice>((state) => state)
  const handlePrevious = debounce(() => {
    if (blog.page > 1) {
      const prevPage = blog.page - 1
      setPage(prevPage)
    }
  }, 300)
  const handleNext = debounce(() => {
    if (blog.page <= 3) {
      const nextPage = blog.page + 1
      setPage(nextPage)
    }
  }, 300)
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={handlePrevious}
            className={`btn-none page-link ${blog.page === 1 ? `btn-disabled` : ''}`}
          >
            Previous Page
          </button>
        </li>
        {_.times(3, (item) => {
          const pageNumber = item + 1
          return (
            <Fragment>
              {blog.page === pageNumber ? (
                <li key={item} className="page-item active" aria-current="page">
                  <span className="page-link">
                    {pageNumber}
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
              ) : (
                <li className="page-item">
                  <button
                    className="btn-none page-link"
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )}
            </Fragment>
          )
        })}
        <li className="page-item">
          <button
            className={`btn-none page-link ${blog.page >= 3 ? `btn-disabled` : ''}`}
            onClick={handleNext}
          >
            Next Page
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default BlogPagination
