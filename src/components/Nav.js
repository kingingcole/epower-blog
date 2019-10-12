import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <TextLogo>Epower Blog</TextLogo>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  background: rgb(24, 136, 165);
  padding: 10px;
  text-align: center
`

const TextLogo = styled.h1`
  font-size: 50px;
  color: white;
  margin: 0
`

export default Navbar