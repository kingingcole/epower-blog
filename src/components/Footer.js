import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <TextCopyright>Copyright 2019</TextCopyright>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: rgb(24, 136, 165);
  padding: 30px;
  text-align: center
`

const TextCopyright = styled.p`
  font-size: 14px;
  color: white;
  margin: 0
`

export default Footer