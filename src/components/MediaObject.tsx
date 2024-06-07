import { IBlog } from '@/services/blogService'
import moment from 'moment'
import Image from 'next/image'

interface Props {
  data: IBlog
}

const MediaObject = ({ data }: Props) => {
  return (
    <li className="media align-items-center py-5 border-bottom">
      <Image
        width={460}
        height={611}
        src={data.image}
        className="align-self-start mr-3"
        alt={data.title}
        style={{ objectFit: 'cover' }}
      />
      <div className="media-body mx-4">
        <h3 className="mt-0 mb-4">{data.title}</h3>
        <h5 className="badge badge-light mb-4">
          {moment(data.createdAt).format('DD/MM/YYYY')}
        </h5>
        <div className="mb-4">{data.description}</div>
        <button type="button" className="btn btn-dark">
          Read more
        </button>
      </div>
    </li>
  )
}

export default MediaObject
