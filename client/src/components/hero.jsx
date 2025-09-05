import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury Cars on Rent
      </h1>

      <form>
        {/* form inputs will go here */}
      </form>

      <img src={assets.main_car} alt="car" className="max-h-72" />
    </div>
  )
}

export default Hero
