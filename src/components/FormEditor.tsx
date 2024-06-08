import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import dynamic from 'next/dynamic'
const ReactQuillNoSSR = dynamic(() => import('react-quill'), {
  ssr: false,
})
import 'react-quill/dist/quill.snow.css'

const ReactQuillStyled = styled(ReactQuillNoSSR)`
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
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      {isReady && (
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
      )}
      {errors.content && <small className="text-danger">{errorMessage}</small>}
    </>
  )
}

export default FormEditor
