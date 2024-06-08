import FormEditor from '@/components/FormEditor'
import FormInput from '@/components/FormInput'
import Modal from '@/components/Modal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import 'react-quill/dist/quill.snow.css'
import { BlogFormData, blogSchema } from '@/validationSchema'
import { useBlogAPIs } from '@/hooks/useBlogAPIs'

interface Props {
  modal: {
    isModal: boolean
    handleModalOpen: () => void
    handleModalClose: () => void
  }
}

const BlogAdd = ({ modal }: Props) => {
  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  })
  const { useUpdateOne } = useBlogAPIs()
  const mutate = useUpdateOne()
  const onSubmit = (data: BlogFormData) => {
    mutate.mutate(data)
    reset()
    modal.handleModalClose()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        show={modal.isModal}
        onClose={modal.handleModalClose}
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
        <FormEditor control={control} errors={errors} />
      </Modal>
    </form>
  )
}

export default BlogAdd
