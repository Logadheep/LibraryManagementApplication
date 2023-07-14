import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page card">
        <h1>Welcome To Library</h1>
        <p>Opens at: 8:00am</p>
        <p>Closes at: 8:00pm</p>
        <p> Start by <a href='/request'>requesting books</a> or viewing your <a href='/dashboard'>Dashboard</a></p>
      </div>
    </div>
  )
}

export default Home