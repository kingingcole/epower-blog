import React from 'react'
import styled from 'styled-components'

const SinglePostPage = (props) => {
  console.log(props.match.params)
  return <p>{props.match.params.slug}</p>
}

export default SinglePostPage