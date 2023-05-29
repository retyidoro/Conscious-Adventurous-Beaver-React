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
        <img alt="image" src="/green-400h.jpeg" className="home-image" />
      </div>
    </div>
  )
}

export default Home
