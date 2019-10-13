import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'
import axios from 'axios'
import queryString from 'query-string'
import Navbar from '../components/Nav'

const Feed = () => {

  const [allPosts, setAllPosts] = useState([])
  const [postsToDisplay, setpostsToDisplay] = useState([])
  const [showPrevious, setShowPrevious] = useState(false)
  const [showNext, setShowNext] = useState(true)

  const url = 'https://epower.ng/wp-json/wp/v2/posts'
  const POSTS_PER_PAGE = 6
  const pageQueries = queryString.parse(window.location.search)
  const pageNumber = Number(pageQueries.page)
  console.log(pageQueries, pageNumber)

  const fetchAllPosts = url => {
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setAllPosts(res.data)
      })
  }

  const handleNextClick = () => {
    let page
    page = pageQueries.page ? pageNumber : 1
    let query = { page: page + 1 }
    window.location.search = queryString.stringify(query)
  }

  const handlePreviousClick = () => {
    let query = { page: pageNumber - 1 }
    window.location.search = queryString.stringify(query)
  }

  useEffect(() => {
    fetchAllPosts(url)
  }, [])

  useEffect(() => {
    const pageQueries = queryString.parse(window.location.search)
    const pageNumber = Number(pageQueries.page)
    if (pageNumber > 1) setShowPrevious(true)

    let startFrom, endAt;

    if (pageNumber > 1) {
      startFrom = (pageNumber - 1) * POSTS_PER_PAGE
      endAt = pageNumber * POSTS_PER_PAGE

      if (allPosts.length < endAt) setShowNext(false)
    } else {
      startFrom = 0
      endAt = POSTS_PER_PAGE
    }

    setpostsToDisplay(allPosts.slice(startFrom, endAt))

  }, [allPosts])

  let navbarNode = (
    <Fragment><h1 style={{fontSize: '50px'}}>Epower blog</h1></Fragment>
  )


  if (postsToDisplay.length === 0) return (
    <Fragment>
      <Navbar node={navbarNode}/>
      <p className='text-center p-3 m-0'>Loading</p>
    </Fragment>
  )


  return (
    <Fragment>
      <Navbar node={navbarNode}/>
      <FeedPage>
        <div className="row">
          {postsToDisplay && postsToDisplay.map(post => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
              <PostCard
                id={post.id}
                thumbnail={post.featured_image_thumbnail}
                excerpt={post.excerpt.rendered}
                title={post.title.rendered}
                slug={post.slug}/>
            </div>
          ))}
        </div>

        <Pagination showPrevious={showPrevious} showNext={showNext} onNextClick={handleNextClick}
                    onPreviousClick={handlePreviousClick}/>
      </FeedPage>
    </Fragment>
  )
}

const FeedPage = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: auto
`

export default Feed