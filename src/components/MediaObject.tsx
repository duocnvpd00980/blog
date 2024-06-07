import Image from 'next/image'

interface Props {
  media: string
  title: string
  content: string
}

const MediaObject = ({ media, title, content }: Props) => {
  return (
    <li className="media my-4">
      <Image
        width={200}
        height={100}
        src={media}
        className="align-self-start mr-3"
        alt="Hello World"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        {content}
      </div>
    </li>
  )
}

export default MediaObject

//"https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
