import React from 'react'
import styled from 'styled-components'

const Navbar = ({node}) => {
  return (
    <NavbarWrapper>
      <NavbarText>{node || <>Epower blog</>}</NavbarText>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  background: rgb(24, 136, 165);
  padding: 15px;
  text-align: center
`

const NavbarText = styled.div`
  color: white;
  margin: 0
`

export default Navbar