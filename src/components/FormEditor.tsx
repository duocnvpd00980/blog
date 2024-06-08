import styled from '@emotion/styled'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ReactQuillStyled = styled(ReactQuill)`
  .ql-editor {
    height: 10rem;
    overflow-y: scroll;
  }
`
interface Props {
  control: Control<any>
  errors: FieldErrors<any>
}

const FormEditor = ({ control, errors }: Props) => {
  const errorMessage = errors.content?.message as unknown as string
  return (
    <>
      <Controller
        name="content"
        control={control}
        defaultValue=""
        rules={{ required: 'Content is required' }}
        render={({ field }) => (
          <ReactQuillStyled
            theme="snow"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />

      {errors.content && <small className="text-danger">{errorMessage}</small>}
    </>
  )
}

export default FormEditor
