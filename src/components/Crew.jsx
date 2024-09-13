import clsx from 'clsx';
import { useState } from 'react'
import json from '../../data.json'

export const Crew = () => {
  const [crew, setCrew] = useState(json.crew[0])
  return (
    <div className='flex flex-col items-center text-center lg:grid grid-cols-2 gap-10 lg:gap-32'>

      <section className='flex flex-col h-full justify-center items-center text-center lg:items-start lg:text-left'>

        <div className='flex flex-col gap-3 items-center text-center lg:items-start lg:text-left'>
          <h4 className='text-theme-accent/50 text-md font-serif uppercase'>{crew.role}</h4>
          <h2 className='text-theme-white text-lg lg:text-xl font-serif uppercase'>{crew.name}</h2>
          <p className='text-theme-white/70 text-base font-sans-cond'>
            {crew.bio}
          </p>
        </div>

        <ul className='flex pt-10 lg:pt-20 items-end gap-8'>
          {json.crew.map((c) => (
            <li key={c.name}>
              {/* rounded dots */}
              <button
                className={clsx('w-3 h-3 rounded-full bg-theme-accent/25', {
                  'bg-theme-white': c.name === crew.name
                })}
                onClick={() => setCrew(c)}
              >
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className='flex items-center justify-center min-h-[400px]'>
        <img
          src={crew.images.png}
          alt={crew.name}
          width={568}
          height={712}
          className='w-[400px] lg:w-[568px] h-[500px] lg:h-[712px] object-top object-cover'
        />
      </section>
    </div>
  )
};

export default Crew
