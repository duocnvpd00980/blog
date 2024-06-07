import FormInput from '@/components/Form/FormInput'
import Modal from '@/components/Modal'
import { useForm } from 'react-hook-form'

interface Props {
  modal: {
    isModal: boolean
    handleModalOpen: () => void
    handleModelClose: () => void
  }
}

type FormData = {
  title: string
  image: string
  description: string
  content: string
}

const BlogAdd = ({ modal }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Modal
        show={modal.isModal}
        onClose={modal.handleModelClose}
        title="Add new blog"
      >
        <FormInput
          label="Title"
          name="title"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Image"
          name="image"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Description"
          name="description"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Content"
          name="content"
          register={register}
          errors={errors}
        />
      </Modal>
    </form>
  )
}

export default BlogAdd
