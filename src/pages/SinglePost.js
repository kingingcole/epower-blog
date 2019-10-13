import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../components/Nav'

const SinglePostPage = ({ match }) => {

  let { id } = match.params

  const [singlePost, setSinglePost] = useState(null)
  const [navbarText, setNavbarText] = useState('Epower blog')

  const fetchPost = id => {
    const url = `https://epower.ng/wp-json/wp/v2/posts/${id}`
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setSinglePost(res.data)
        setNavbarText(res.data.title.rendered)
      })
  }

  useEffect(() => {
    fetchPost(id)
  }, [])

  let navbarNode = (
    <Fragment>
      <h1 style={{ fontSize: '50px' }}>{navbarText}</h1>
    </Fragment>
  )

  if (!singlePost) return (
    <Fragment>
      <Navbar node={navbarNode}/>
      <p className='text-center p-3 m-0'>Loading</p>
    </Fragment>
  )

  return (
    <Fragment>
      <Navbar node={navbarNode}/>
      <PostPage>
        <div className="row">
          <FeaturedImage src={singlePost.featured_image} alt={singlePost.title.rendered}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: singlePost.content.rendered }}
             style={{ maxWidth: '700px', margin: 'auto' }}/>
      </PostPage>
    </Fragment>
  )
}

const PostPage = styled.section`
  padding: 100px 20px;
  font-size: 0.92em
`

const FeaturedImage = styled.img`
  max-width: 900px;
  width: 100%;
  height: auto;
  text-align: center;
  margin: auto;
  margin-bottom: 20px 
`

export default SinglePostPage