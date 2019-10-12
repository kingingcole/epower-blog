import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <TextCopyright>Copyright 2019</TextCopyright>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.nav`
  background: rgb(24, 136, 165);
  padding: 10px;
  text-align: center
`

const TextCopyright = styled.p`
  font-size: 14px;
  color: white;
  margin: 0
`

export default Footer