import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import axios from 'axios'

const Feed = () => {

  const [ posts, setPosts ] = useState([])
  const url = 'https://epower.ng/wp-json/wp/v2/posts'

  const fetchPosts = url => {
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
  }

  useEffect(() => {
    fetchPosts(url)
  }, [])

  if (posts.length === 0) return <p className='text-center p-3 m-0'>Loading</p>

  return (
    <FeedPage>
      <div className="row">
        {posts && posts.map(post =>  (
          <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
            <PostCard
              thumbnail={post.featured_image_thumbnail}
              excerpt={post.excerpt.rendered}
              title={post.title.rendered}
              slug={post.slug}/>
          </div>
        ))}
      </div>
    </FeedPage>
  )
}

const FeedPage = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: auto
`

export default Feed