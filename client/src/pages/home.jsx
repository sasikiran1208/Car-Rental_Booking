import React from 'react'
import Hero from '../components/hero' // Assuming relative path for Hero component

const Home = () => {
  return (
    <> {/* This fragment correctly wraps the Hero component */}
      <Hero />
    </>
  )
}

export default Home