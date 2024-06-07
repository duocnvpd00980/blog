'use client'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const HeadingStyled = styled.div`
  min-height: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DisplayHeading = ({ children }: Props) => {
  return (
    <HeadingStyled className="py-2 px-2">
      <h1 className="display-1 font-weight-bold text-center">{children}</h1>
    </HeadingStyled>
  )
}

export default DisplayHeading
