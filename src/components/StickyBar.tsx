'use client'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const StickyBarStyled = styled.nav`
  position: sticky;
  top: 0;
`

const StickyBar = ({ children }: Props) => {
  return (
    <StickyBarStyled className="navbar navbar-light bg-light">
      {children}
    </StickyBarStyled>
  )
}

export default StickyBar
