import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Conscious Adventurous Beaver</title>
        <meta property="og:title" content="Conscious Adventurous Beaver" />
      </Helmet>
      <h1>Heading</h1>
      <div className="home-container1">
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Home
