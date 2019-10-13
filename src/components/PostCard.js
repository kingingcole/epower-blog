import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const PostCard = ({thumbnail, title, excerpt, slug, id}) => {

  excerpt = `${excerpt.slice(0, 270)}` // reduce length of excerpt chars to maintain uniform height for cards
  if (!excerpt.endsWith('...')) {
    // if excerpt after being truncated has '...', leave it as-is. Else append with '...' for uniformity sake
    excerpt = `${excerpt}...`
  }

  return (
    <PostCardWrapper className="card" to={`${slug}/${id}`}>
      <PostImage src={thumbnail} className="card-img-top" alt="..."/>
      <PostDesc className="card-body">
        <PostTitle className="card-text">{title}</PostTitle>
        <PostExcerpt className="card-text">{excerpt}</PostExcerpt>
      </PostDesc>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled(Link)`
  box-shadow: 3px 4px 10px 10px whitesmoke;  
  border: none;
  width: 19rem;
  margin: 20px auto;
  color: black;
  
  &:hover, &:active {
    color: rgb(24, 136, 165);
    text-decoration: none;
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 250px;
`

const PostDesc = styled.div`
  padding: 10px 30px !important;
  padding-bottom: 15px;
  text-align: center;
  height: 320px;
`

const PostTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500
`

const PostExcerpt = styled.p`
  font-size: 1em;
`

export default PostCard