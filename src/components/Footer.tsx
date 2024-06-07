'use client'
import styled from '@emotion/styled'
import React from 'react'

const FooterStyled = styled.div`
  max-width: 75rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  hr {
    width: 100%;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2024, All Rights Reserved</p>
    </FooterStyled>
  )
}

export default Footer
