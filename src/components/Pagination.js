import React from 'react'
import styled from 'styled-components'

const Pagination = ({showPrevious, showNext, onPreviousClick, onNextClick}) => {
 return(
   <PaginationWrapper>
     <PreviousButton onClick={onPreviousClick} showPrevious={showPrevious} disabled={!showPrevious}>Previous</PreviousButton>
     <NextButton onClick={onNextClick} showNext={showNext} disabled={!showNext}>Next</NextButton>
   </PaginationWrapper>
 )
}

const PaginationWrapper = styled.div`
  text-align: center;
  margin: 10px auto;
`

const PaginatorButton = styled.button`
  background: rgb(24, 136, 165);
  border: none;
  font-size: 0.9em;
  padding: 14px;
  margin: 40px;
  width: 120px;
  color: white;
  border-radius: 30px
`

const PreviousButton = styled(PaginatorButton)`
  background: ${props => props.showPrevious ? 'rgb(24, 136, 165)' : '#c3c3c3' }
`
const NextButton = styled(PaginatorButton)`
  background: ${props => props.showNext ? 'rgb(24, 136, 165)' : '#c3c3c3' }
`

export default Pagination