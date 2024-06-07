'use client'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const ContainerStyled = styled.div`
  min-height: 90vh;
`

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled className="container-md">{children}</ContainerStyled>
}

export default Container
