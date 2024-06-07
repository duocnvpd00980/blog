import styled from '@emotion/styled'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ReactQuillStyled = styled(ReactQuill)`
  .ql-editor {
    height: 17.5rem;
    overflow-y: scroll;
  }
`
const Editor = () => {
  const [value, setValue] = useState('')
  return <ReactQuillStyled theme="snow" value={value} onChange={setValue} />
}

export default Editor
