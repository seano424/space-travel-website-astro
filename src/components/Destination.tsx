import clsx from 'clsx';
import { useState } from 'react'
import json from '../../data.json'

export const Destination = () => {
  const [destination, setDestination] = useState(json.destinations[0])
  return (
    <div className='flex flex-col items-center text-center lg:grid grid-cols-2 gap-10 lg:gap-32'>
      <section>
        <img
          src={destination.images.png}
          alt={destination.name}
          className='w-80 lg:w-full h-full object-cover'
        />
      </section>

      <section className='flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl'>
        <ul className='flex gap-10'>
          {json.destinations.map((d) => (
            <li key={d.name}>
              <button
                className={clsx("uppercase text-theme-accent relative font-sans-cond text-base after:content-[''] after:absolute after:-bottom-3 after:bg-theme-accent/25 after:w-full after:h-[3px] after:left-0 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100 after:focus:opacity-100", {
                  'after:opacity-100 text-theme-white after:bg-theme-white': d.name === destination.name
                })}
                onClick={() => setDestination(d)}
              >
                {d.name}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex flex-col items-center mt-5 text-center lg:items-start lg:text-left'>
          <h2 className='text-theme-white text-2xl font-serif uppercase'>{destination.name}</h2>
          <p className='text-theme-accent text-base font-sans-cond'>
            {destination.description}
          </p>
          {/* line */}
          <div className='border-b border-theme-accent/25 w-full my-5' />


          <div className='flex flex-col gap-5 md:flex-row md:gap-20'>
            <div>
              <h4 className='text-theme-accent text-base font-sans-cond uppercase'>Avg. Distance</h4>
              <h3 className='text-theme-white text-lg font-sans-cond uppercase'>{destination.distance}</h3>
            </div>
            <div>
              <h4 className='text-theme-accent text-base font-sans-cond uppercase'>Est. Travel Time</h4>
              <p className='text-theme-white text-md font-serif uppercase'>{destination.travel}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Destination
