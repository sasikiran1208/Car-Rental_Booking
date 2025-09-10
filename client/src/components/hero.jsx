import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">

      <form className='flex flex-col md:flex-row items-start md:items-center
      justify-between p-6 rounded-1g md:rounded-full w-full max-w-80 md:max-w-200
       bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
            <div className='flex flex-col items-start gap-2'>
                <select
                  required
                  value={pickupLocation}
                  onChange={e => setPickupLocation(e.target.value)}
                >
                    <option value="">Pickup Location</option>
                    {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-grey-500'>{pickupLocation ? pickupLocation : 'Please Select Location'}</p>
            </div>

             <div className='flex flex-col items-start gap-2'>
                <label htmlFor='pickup-date'>Pick-Up-date</label>
                <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500'/>
            </div>

            <div className='flex flex-col items-start gap-2'>
                <label htmlFor='return-date'>Return-date</label>
                <input type="date" id="retrun-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500'/>
            </div>
        </div>

        <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                <img className='brightness-300' src={assets.search_icon} alt='search' />
                Search
            </button>

        
      </form>

      <h1 className="text-4xl md:text-5xl font-semibold">
        Experience Prestige on Wheels
      </h1>


      <img src={assets.main_car} alt="car" className="max-h-72" />
    </div>
  )
}

export default Hero
