'use client'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const ContainerStyled = styled.div`
  min-height: 90vh;
  max-width: 53.75rem;
`

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled className="container-sm">{children}</ContainerStyled>
}

export default Container
